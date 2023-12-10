// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import "../interfaces/IOCDVersion.sol";
import "../interfaces/IOCDeedRegister.sol";
import "../interfaces/IOCDOpsRegister.sol";
import "../interfaces/IOCDVaultFactory.sol";
import "../interfaces/IOCDVault.sol";
import "../interfaces/IOCDeedToken.sol";
import "../interfaces/IOCDNFTFeedRegistry.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@chainlink/contracts/src/v0.8/Denominations.sol";
import "@chainlink/contracts/src/v0.8/interfaces/FeedRegistryInterface.sol";


contract OCDeedRegister is IOCDeedRegister, IOCDVersion {

    modifier deedTokenOnly() {
        require(msg.sender == register.getAddress(DEED_TOKEN), "Deed Token Only");
        _;
    }

    modifier ieOnly() {
        require(msg.sender == register.getAddress(DEED_IMPORTER) 
                || msg.sender == register.getAddress(DEED_IMPORTER), "import/export only");
        _;  
    }

    modifier adminOnly() {
        require(msg.sender == register.getAddress(DEED_IMPORTER) 
                || msg.sender == register.getAddress(DEED_IMPORTER), "import/export only");
        _;  
    }

    uint256 constant version = 1; 
    string constant name = "RESERVED_DEED_REGISTER";

    string constant OCD_ADMIN = "RESERVED_OCD_ADMIN";
    string constant MAX_ASSET_COUNT_PARAMETER = "MAX_ASSET_COUNT_PARAMETER";
    string constant STANDARD_DECIMALS_PARAMETER = "STANDARD_DECIMALS_PARAMETER";

    string constant VAULT_FACTORY = "RESERVED_VAULT_FACTORY"; 
    string constant DEED_TOKEN = "RESERVED_DEED_TOKEN";
    string constant DEED_IMPORTER = "RESERVED_DEED_IMPORTER";
    string constant DEED_EXPORTER = "RESERVED_DEED_EXPORTER";
    string constant ERC20_FEED_REGISTRY = "RESERVED_CHAINLINK_ERC20_FEED_REGISTRY";
    string constant NFT_FEED_REGISTRY = "RESERVED_OCD_NFT_FEED_REGISTRY";
  
    uint256 immutable chainId; 
    address immutable self; 
    IOCDOpsRegister register; 
    IOCDeedToken deedToken; 
    FeedRegistryInterface feedRegistry; 
    IOCDNFTFeedRegistry nftFeedRegistry; 

    uint256 [] registrationIds; 
    mapping(uint256=>RegisteredDeed) rDeedById;
    mapping(Status=>uint256[]) rDeedIdByStatus; 
    mapping(address=>uint256[]) deedIdsByOwner;  
    mapping(uint256=>mapping(address=>bool)) transferApprovalsByOperatorByDeedId; 
    mapping(uint256=>address) vaultByDeedId; 

    constructor(address _register) {
        register        = IOCDOpsRegister(_register);
        chainId         = register.getChainId();
        deedToken       = IOCDeedToken(register.getAddress(DEED_TOKEN));
        feedRegistry    = FeedRegistryInterface(register.getAddress(ERC20_FEED_REGISTRY));
        nftFeedRegistry = IOCDNFTFeedRegistry(register.getAddress(NFT_FEED_REGISTRY));

        self = address(this);
    }

    function getNameAndVersion() pure external returns (string memory _name, uint256 _version){
        return (name, version);
    }

    function getChainId() view external returns (uint256 _chainId){   
        return chainId; 
    }

    function getRegisteredDeeds() view external returns (RegisteredDeed[] memory _rDeeds){
        _rDeeds = new RegisteredDeed[](registrationIds.length);
        for(uint256 x = 0; x <registrationIds.length; x++) {
            _rDeeds[x] = rDeedById[registrationIds[x]];
        }
        return _rDeeds; 
    }

    function getRegisteredDeedsByStatus(Status _status) view external returns (RegisteredDeed[] memory _rDeeds){
        return getDeedsForIds(rDeedIdByStatus[_status]);
    }

    function getRegisteredDeed(uint256 _rDeedId) view external returns (RegisteredDeed memory _rDeed){
        return rDeedById[_rDeedId]; 
    }

    function getCurrentValue(uint256 _rDeedId) payable external returns (uint256 _rDeedValue, address _erc20){
        return getDeedValue(_rDeedId);
    }   

    function getDeedIds() view external returns (uint256 [] memory _deedIds){
        return deedIdsByOwner[msg.sender];
    }   

    function getVault(uint256 _deedId) view external returns (address _vault) {
        return vaultByDeedId[_deedId];
    }

    function registerDeed(Deed memory _deed) external returns (uint256 _registrationId){
        require(_deed.assets.length > register.getParameter(MAX_ASSET_COUNT_PARAMETER), "too many assets");
        _registrationId = getRegistrationId(); 
        registrationIds.push(_registrationId);
        uint256 totalValue_ = 0; 
        IOCDVault vault_ = IOCDVault(IOCDVaultFactory(register.getAddress(VAULT_FACTORY)).getVault());
        for(uint256 x = 0; x < _deed.assets.length; x++){
            Asset memory _asset = _deed.assets[x];
            // value with chainlink
            if(_asset.assetType == AssetType.ERC20){
                (uint80 roundId_,
                int256 answer_,
                uint256 startedAt_,
                uint256 updatedAt_,
                uint80 answeredInRound_) = feedRegistry.latestRoundData(_asset.assetContract, Denominations.USD);
                uint8 decimals_ = feedRegistry.decimals(_asset.assetContract, Denominations.USD);
                totalValue_ += resolveDecimals(answer_, decimals_);  
            } 
            if(_asset.assetType == AssetType.ERC721 && nftFeedRegistry.hasFeed(_asset.assetContract)){

                AggregatorV3Interface ai = AggregatorV3Interface(nftFeedRegistry.getFeed(_asset.assetContract));
                (uint80 roundId_,
                int256 answer_,
                uint256 startedAt_,
                uint256 updatedAt_,
                uint80 answeredInRound_) = ai.latestRoundData();
                uint8 decimals_ = ai.decimals();
                totalValue_ += resolveDecimals(answer_, decimals_);
            }
            prepAssetForVault(_asset, msg.sender, address(vault_));
            vault_.storeAsset(_asset);
        }
        vaultByDeedId[_registrationId] = address(vault_);
        IOCDeedToken(register.getAddress(DEED_TOKEN)).mint( _deed.owner, _registrationId);
        rDeedById[_registrationId] = RegisteredDeed({
                                                        owner : _deed.owner,
                                                        vault : address(vault_),
                                                        registrationId : _registrationId,
                                                        issueDate : block.timestamp,   
                                                        valueOnIssueDate : totalValue_,  
                                                        nativeChainId : chainId,  
                                                        status : Status.REGISTERED 
                                                    });
       
        rDeedIdByStatus[rDeedById[_registrationId].status].push(_registrationId); 
        deedIdsByOwner[rDeedById[_registrationId].owner].push(_registrationId); 

        return _registrationId;
    }

    function transferDeed(uint256 _deedId, address _to) deedTokenOnly external returns (RegisteredDeed memory _rDeed){
        _rDeed = rDeedById[_deedId];
        rDeedById[_deedId].owner = _to; 
        return _rDeed;
    }

    function updateDeedStatus(Status _status, uint256 _deedId) ieOnly external returns (RegisteredDeed memory _rDeed){
        require(_status == Status.EXPORTED || _status == Status.IMPORTED, "invalid status update");
        rDeedById[_deedId].status = _status;
        return rDeedById[_deedId];
    }

    function deRegisterDeed(uint256 _registrationId) external returns (uint256 _deregistrationDate, uint256 _transferedAssetCount){
        require(rDeedById[_registrationId].status != Status.EXPORTED 
                && rDeedById[_registrationId].status != Status.IMPORTED
                && rDeedById[_registrationId].status != Status.DEREGISTERED, "invalid de-registration status"); 
        IOCDeedToken(register.getAddress(DEED_TOKEN)).burn(_registrationId);
        rDeedById[_registrationId].status = Status.DEREGISTERED;

        rDeedIdByStatus[rDeedById[_registrationId].status].push(_registrationId); 
        Asset [] memory assets_ = IOCDVault(rDeedById[_registrationId].vault).withdrawAssets(); 
        for(uint256 x = 0; x < assets_.length; x++){
            transferAssetToEOA( assets_[x], address(rDeedById[_registrationId].vault), rDeedById[_registrationId].owner);
        }
        return (block.timestamp, assets_.length);
    }

    //=====================================================================
    function resolveDecimals(int256 _answer, uint8 _decimals) view internal returns (uint256 _value) {
         if(_decimals < register.getParameter(STANDARD_DECIMALS_PARAMETER)) {
            uint256 decimalDifference_ = register.getParameter(STANDARD_DECIMALS_PARAMETER) - _decimals;
            uint256 zeros_ = 10**(decimalDifference_);
            _answer *= int256(zeros_);
        }
        return uint256(_answer); 
    }

    function prepAssetForVault(Asset memory _asset, address _from, address _vault) internal {
        if(_asset.assetType == AssetType.ERC20){
            IERC20(_asset.assetContract).transferFrom(_from, self, _asset.deedCommittedBalance);
            IERC20(_asset.assetContract).approve(_vault,_asset.deedCommittedBalance);
        }
        if(_asset.assetType == AssetType.ERC721){
            IERC721(_asset.assetContract).transferFrom(_from, self, _asset.idOnContract);
            IERC721(_asset.assetContract).approve(_vault,_asset.idOnContract);
        }
    }

    function transferAssetToEOA(Asset memory _asset, address _from, address _eoa) internal {
        if(_asset.assetType == AssetType.ERC20){
            IERC20(_asset.assetContract).transferFrom(_from, self, _asset.deedCommittedBalance);
            IERC20(_asset.assetContract).transfer(_eoa,_asset.deedCommittedBalance);
        }
        if(_asset.assetType == AssetType.ERC721){
            IERC721(_asset.assetContract).transferFrom(_from, self, _asset.idOnContract);
            IERC721(_asset.assetContract).transferFrom(self, _eoa, _asset.idOnContract);
        }
    }
    function getRegistrationId() internal returns (uint256 _registrationId) {
        // use vrf chainlink
    }

    function getDeedValue(uint256 _rDeedId) view internal returns (uint256 _value, address _erc20) {
        RegisteredDeed memory deed_ = rDeedById[_rDeedId];
        return IOCDVault(deed_.vault).getStoredValue();
    }

    function getDeedsForIds(uint256[] memory _deedIds) view internal returns (RegisteredDeed [] memory _rDeeds){
        _rDeeds = new RegisteredDeed[](_deedIds.length);
        for(uint256 x = 0; x < _rDeeds.length; x++) {
            _rDeeds[x] = rDeedById[_deedIds[x]];
        }
        return _rDeeds; 
    }
}