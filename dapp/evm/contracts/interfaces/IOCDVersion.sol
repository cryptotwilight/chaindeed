// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

interface IOCDVersion {

    function getNameAndVersion() view external returns (string memory _name, uint256 _version);

}