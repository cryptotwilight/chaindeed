// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

interface IOCDVaultFactory { 

    function getVault() external returns (address _vault);

    function getVaults() external returns (address[] memory _values);

    function isKnownVault(address _vault) external returns (bool _isKnown);

}