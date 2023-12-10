// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import "../interfaces/IOCDVaultFactory.sol";
import "../interfaces/IOCDVersion.sol";
import "../interfaces/IOCDOpsRegister.sol";

import "./OCDVault.sol";

contract OCDVaultFactory is IOCDVaultFactory, IOCDVersion {

    modifier systemOnly () {
        require(msg.sender == register.getAddress(DEED_REGISTER) || msg.sender == register.getAddress(OCD_ADMIN), "admin only");
        _;
    }

    string constant name = "RESERVED_OCD_VAULT_FACTORY";
    uint256 constant version = 1; 

    string constant OCD_ADMIN = "RESERVED_OCD_ADMIN";
    string constant DEED_REGISTER = "RESERVED_DEED_REGISTER";
    
    IOCDOpsRegister register; 
    
    address [] vaults; 
    mapping(address=>bool) isKnown;

    constructor(address _register) {
        register = IOCDOpsRegister(_register);
    }

    function getNameAndVersion() pure external returns (string memory _name, uint256 _version){
        return (name, version);
    }

    function getVault() external systemOnly returns (address _vault){
        _vault = address(new OCDVault(address(register)));
        vaults.push(_vault);
        isKnown[_vault] = true; 
        return _vault; 
    }

    function getVaults() view external returns (address[] memory _values){
        return vaults;  
    }

    function isKnownVault(address _vault) view external returns (bool _isKnown){
        return isKnown[_vault];
    }
}