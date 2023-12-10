// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import "../interfaces/IOCDeedToken.sol";
import "../interfaces/IOCDeedRegister.sol";
import "../interfaces/IOCDOpsRegister.sol";
import "../interfaces/IOCDVersion.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract OCDeedToken is ERC721, IOCDeedToken, IOCDVersion {

    modifier registerOnly { 
        require(msg.sender == address(register.getAddress(DEED_REGISTER)), "Deed Register only");
        _;
    }

    string constant nme = "RESERVED_DEED_TOKEN";
    uint256 constant version = 1; 

    string constant DEED_REGISTER = "RESERVED_DEED_REGISTER";

    IOCDOpsRegister register; 

    constructor(string memory _name, string memory _symbol, address _register) ERC721(_name, _symbol){
        register = IOCDOpsRegister(_register);
    }

    function getNameAndVersion() pure external returns (string memory _name, uint256 _version){
        return (nme, version);
    }

    function transferFrom(address from, address to, uint256 tokenId) override public  {
        super.transferFrom(from, to, tokenId);
        IOCDeedRegister(register.getAddress(DEED_REGISTER)).transferDeed(tokenId, to);
    }

    function mint(address _to, uint256 _deedId) registerOnly external returns (bool _minted){
        _mint(_to, _deedId);
        return true; 
    }

    function burn(uint256 _deedId) registerOnly external returns (bool _burnt) {
        _burn(_deedId);
        return true; 
    }

}