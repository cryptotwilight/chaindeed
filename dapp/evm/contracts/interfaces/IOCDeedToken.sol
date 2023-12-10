// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

interface IOCDeedToken {

    function mint( address _to, uint256 _deedId) external returns (bool _minted);

    function burn(uint256 _deedId) external returns (bool _burnt);
}