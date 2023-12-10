// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

interface IOCDLiquidityPool {

    function getAvailableFundPools() view external returns (uint256 [] memory _amount, address[] memory _erc20);

    function getOutstandingBalance(uint256 _deedId) view external returns (uint256 _outstandingBalance);

    function getLeanableValue(uint256 _deedId) external returns (uint256 _leanableValue);

    function getCollateralValue(uint256 _deedId) external returns (uint256 _collateralValue);

    function collateraliseDeed(uint256 _deedId) external returns (uint256 _collateralValue, uint256 _leanableValue);

    function getDepositIds() view external returns (uint256[] memory _depositId);

    function viewDeposit(uint256 _depositId) view external returns (uint256 _principal, uint256 _earnings);

    function depositToPool(uint256 _amount, address _erc20, uint256 _maxPeriod) external returns (uint256 _depositId);

    function withdrawFromPool(uint256 _depositId) external returns (uint256 _depositPlusEarningsMinusDeductions);

    function borrow(uint256 _amount, address _erc20, uint256 _deed) external returns (uint256 _outstandingBalance);

    function repay(uint256 _amount, address _eerc20, uint256 _deed) external returns (uint256 _outstandingBalance);
}