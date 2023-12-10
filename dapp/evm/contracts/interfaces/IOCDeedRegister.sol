// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import "./IOCDeedStructs.sol";

interface IOCDeedRegister {

    function getRegisteredDeeds() view external returns (RegisteredDeed[] memory _rDeeds);

    function getRegisteredDeedsByStatus(Status _status) view external returns (RegisteredDeed[] memory _rDeeds);

    function getRegisteredDeed( uint256 _rDeedId) view external returns (RegisteredDeed memory _rDeed);

    function getCurrentValue(uint256 _rDeedId) payable external returns (uint256 _rDeedValue, address _erc20);

    function getDeedIds() view external returns (uint256 [] memory _deedIds);

    function registerDeed(Deed memory _deed) external returns (uint256 _registrationId);

    function transferDeed(uint256 _deedId, address _to) external returns (RegisteredDeed memory _rDeed);

    function updateDeedStatus(Status _status, uint256 _deedId) external returns (RegisteredDeed memory _rDeed);

    function deRegisterDeed(uint256 _registrationId) external returns (uint256 _deregistrationDate, uint256 _transferedAssetCount);
}