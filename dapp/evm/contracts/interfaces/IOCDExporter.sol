// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import {RegisteredDeed} from "./IOnChainDeedRegister.sol";

interface IOCDExporter {

    function getExportedDeedIds() view external returns (uint256 [] memory _rDeedIds); 

    function getExportFee() view external returns (uint256 _exportFee);

    function export(RegisteredDeed memory rDeed, uint256 _destinationChainId) payable external returns (uint256 _exportId);

}