// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import {Asset} from "./IOCDeedRegister.sol";

interface IOCDVault {

    function getStoredValue() view external returns (uint256 _amount, address _erc20);

    function getAssetCount() view external returns (uint256 _assetCount);       

    function storeAsset(Asset memory _asset) external payable returns (uint256 _storedCount);

    function withdrawAssets() external returns (Asset [] memory _assets);
}