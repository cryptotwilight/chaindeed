// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import "../interfaces/IOCDVersion.sol";
import "../interfaces/IOCDOpsRegister.sol";

contract OCDOpsRegister is IOCDOpsRegister { 

    modifier adminOnly { 
        require(msg.sender == admin, "admin only");
        _;
    }

    string constant OCD_ADMIN = "RESERVED_OCD_ADMIN";

    string constant MAX_ASSET_COUNT_PARAMETER = "MAX_ASSET_COUNT_PARAMETER";
    string constant STANDARD_DECIMALS_PARAMETER = "STANDARD_DECIMALS_PARAMETER";

    uint256 constant MAX_ASSET_COUNT_DEFAULT = 10; 
    uint256 constant STANDARD_DECIMALS_DEFAULT = 18;  

    uint256 immutable chainId; 
    address admin; 

    mapping(string=>address) addressByName; 
    mapping(address=>string) nameByAddress; 
    mapping(string=>uint256) versionByName; 

    mapping(string=>uint256) parameterByName;  

    constructor(address _admin, uint256 _chainId) {
        admin = _admin; 
        chainId = _chainId; 
        parameterByName[MAX_ASSET_COUNT_PARAMETER] = MAX_ASSET_COUNT_DEFAULT;
        parameterByName[STANDARD_DECIMALS_PARAMETER] = STANDARD_DECIMALS_DEFAULT;
    }

    function getChainId() view external returns (uint256 _chainId){
        return chainId; 
    }

    function getName(address _address) view external returns (string memory _name){
        return nameByAddress[_address];
    }

    function getAddress(string memory _name) view external returns (address _address){
        return addressByName[_name];
    }   

    function getVersion(string memory _name) view external returns (uint256 _nme) {
        return versionByName[_name];
    }

    function addAddress(address _address, string memory _name, uint256 _version) external adminOnly returns(bool _added) {
        return addAddressInternal(_address, _name, _version);
    }

    function removeAddress(string memory _name) external adminOnly returns (bool _removed) {
        address address_ = addressByName[_name];
        delete nameByAddress[address_];
        delete addressByName[_name];
        return true; 
    }
    
    function getParameter(string memory _name) view external returns (uint256 _parameter) {
        return parameterByName[_name];
    }

    function setParameter(string memory _name, uint256 _value)  external adminOnly returns (bool _set){
        parameterByName[_name] = _value;
        return true;  
    }
    //================================= INTERNAL =======================================================

    function addAddressInternal(address _address, string memory _name, uint256 _version) internal returns (bool _added){
        addressByName[_name] = _address;
        nameByAddress[_address] = _name;
        versionByName[_name] = _version; 
        return true; 
    }
}