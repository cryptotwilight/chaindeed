// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import "../interfaces/IOCDVault.sol";
import "../interfaces/IOCDeedRegister.sol";
import "../interfaces/IOCDOpsRegister.sol";
import "../interfaces/IOCDVersion.sol";
import "../interfaces/IOCDNFTFeedRegistry.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "@chainlink/contracts/src/v0.8/Denominations.sol";
import "@chainlink/contracts/src/v0.8/interfaces/FeedRegistryInterface.sol";


contract OCDVault is IOCDVault, IOCDVersion {


    modifier deedRegisterOnly {
        require(msg.sender == register.getAddress(DEED_REGISTER), "Deed Register Only");
        _;
    }    

    string constant name = "OCD_VAULT";
    uint256 constant version = 1; 

    address immutable self; 

    string constant DEED_REGISTER = "RESERVED_DEED_REGISTER";
    string constant ERC20_FEED_REGISTRY = "RESERVED_CHAINLINK_ERC20_FEED_REGISTRY";
    string constant NFT_FEED_REGISTRY = "RESERVED_OCD_NFT_FEED_REGISTRY";

    string constant MAX_ASSET_COUNT_PARAMETER = "MAX_ASSET_COUNT_PARAMETER";
    string constant STANDARD_DECIMALS_PARAMETER = "STANDARD_DECIMALS_PARAMETER";

    IOCDOpsRegister register;

    uint256 [] assetIndex; 
    mapping(uint256=>Asset) assetByIndex; 

    constructor(address _register){
        register = IOCDOpsRegister(_register);
        self = address(this);
    }

    function getNameAndVersion() pure external returns (string memory _name, uint256 _version){
        return (name, version);
    }

    function getStoredValue() view external returns (uint256 _value, address _erc20){
        // check with Chainlink
        FeedRegistryInterface feedRegistry = FeedRegistryInterface(register.getAddress(ERC20_FEED_REGISTRY));
        IOCDNFTFeedRegistry nftFeedRegistry = IOCDNFTFeedRegistry(register.getAddress(NFT_FEED_REGISTRY));
        for(uint256 x = 0; x < assetIndex.length; x++) {
            Asset memory asset_ = assetByIndex[assetIndex[x]];
                if(asset_.assetType == AssetType.ERC20){
                (uint80 roundId_,
                int256 answer_,
                uint256 startedAt_,
                uint256 updatedAt_,
                uint80 answeredInRound_) = feedRegistry.latestRoundData(asset_.assetContract, Denominations.USD);
                uint8 decimals_ = feedRegistry.decimals(asset_.assetContract, Denominations.USD);
                _value += resolveDecimals(answer_, decimals_);
            }
            if(asset_.assetType == AssetType.ERC721 && nftFeedRegistry.hasFeed(asset_.assetContract)){

                AggregatorV3Interface ai = AggregatorV3Interface(nftFeedRegistry.getFeed(asset_.assetContract));
                (uint80 roundId_,
                int256 answer_,
                uint256 startedAt_,
                uint256 updatedAt_,
                uint80 answeredInRound_) = ai.latestRoundData();
                uint8 decimals_ = ai.decimals();
                _value +=  resolveDecimals(answer_, decimals_);
            }
        }
        return (_value,  Denominations.USD);
    }

    function viewAssets() view external returns (Asset [ ] memory _assets) {
        _assets = new Asset[](assetIndex.length);
        for(uint256 x = 0; x < assetIndex.length; x++) {
            Asset memory asset_ = assetByIndex[assetIndex[x]];
            _assets[x] = asset_;
        }
        return _assets;
    }

    function getAssetCount() view external returns (uint256 _assetCount){
        return assetIndex.length; 
    }      

    function storeAsset(Asset memory _asset) external deedRegisterOnly payable returns (uint256 _storedCount){
        if(_asset.assetType == AssetType.ERC20){
            IERC20(_asset.assetContract).transferFrom(msg.sender, self, _asset.deedCommittedBalance);
        }
        if(_asset.assetType == AssetType.ERC721){
            IERC721(_asset.assetContract).transferFrom(msg.sender, self, _asset.idOnContract);
        }

        assetByIndex[assetIndex.length] = _asset; 
        assetIndex.push(assetIndex.length);
        
        return assetIndex.length; 
    }

    function withdrawAssets() external deedRegisterOnly returns (Asset [] memory _assets){
        _assets = new Asset[](assetIndex.length);
        for(uint256 x = 0; x < assetIndex.length; x++) {
            Asset memory asset_ = assetByIndex[assetIndex[x]];
            delete assetByIndex[assetIndex[x]];
            if(asset_.assetType == AssetType.ERC20){
                IERC20(asset_.assetContract).approve(msg.sender,asset_.deedCommittedBalance);
            }
            if(asset_.assetType == AssetType.ERC721){
                IERC721(asset_.assetContract).approve(msg.sender, asset_.idOnContract);
            }
            _assets[x] = asset_;
        }
        assetIndex = new uint256[](0);
        return _assets; 
    }


    //====================================== INTRENAL ============================================

        function resolveDecimals(int256 _answer, uint8 _decimals) view internal returns (uint256 _value) {
         if(_decimals < register.getParameter(STANDARD_DECIMALS_PARAMETER)) {
            uint256 decimalDifference_ = register.getParameter(STANDARD_DECIMALS_PARAMETER) - _decimals;
            uint256 zeros_ = 10**(decimalDifference_);
            _answer *= int256(zeros_);
        }
        return uint256(_answer); 
    }
}