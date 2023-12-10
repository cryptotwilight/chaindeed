// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;


interface IOCDOpsRegister {

    function getChainId() view external returns (uint256 _chainId);

    function getName(address _address) view external returns (string memory _name);

    function getAddress(string memory _name) view external returns (address _address);

    function getParameter(string memory _name) view external returns (uint256 _parameter);
}