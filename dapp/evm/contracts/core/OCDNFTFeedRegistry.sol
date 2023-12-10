// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import "../interfaces/IOCDVersion.sol";
import "../interfaces/IOCDOpsRegister.sol";
import "../interfaces/IOCDNFTFeedRegistry.sol";

contract OCDNFTFeedRegistry is IOCDNFTFeedRegistry, IOCDVersion {

    modifier adminOnly {
        require(register.getAddress(OCD_ADMIN) == msg.sender, "admin only ");
        _;
    }

    string constant name = "RESERVED_OCD_NFT_FEED_REGISTRY";
    uint256 constant version = 1; 
    
    string constant OCD_ADMIN = "RESERVED_OCD_ADMIN";

    IOCDOpsRegister register;

    mapping(address=>address) nftFeedByProjectContract;
    mapping(address=>bool) hasFeedByProjectContract;

    constructor(address _registry) {
        register = IOCDOpsRegister(_registry);
    }

    function getNameAndVersion() pure external returns (string memory _name, uint256 _version){
        return (name, version);
    }

    function hasFeed(address _projectContract) view external returns (bool _hasFeed) {
        return hasFeedByProjectContract[_projectContract];
    }

    function getFeed(address _nftContract) view external returns (address _chainlinkFeed){
        return nftFeedByProjectContract[_nftContract];
    }

    function addFeed(address _chainlinkContract, address _nftProjectContract) external adminOnly returns (bool _added) {
        nftFeedByProjectContract[_nftProjectContract] = _chainlinkContract;
        return true; 
    }

    function removeFeed( address _nftProjectContract) external adminOnly returns (bool _removed) {
        delete nftFeedByProjectContract[_nftProjectContract];
        return true; 
    }

}