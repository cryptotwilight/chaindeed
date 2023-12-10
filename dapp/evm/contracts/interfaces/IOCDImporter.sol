// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

import {RegisteredDeed} from "./IOCDeedStructs.sol";

interface IOCDImporter {
    
    function claimDeed(uint256 _foreignRegistrationId, uint256 _sourceChainId ) external returns (RegisteredDeed memory _deed);

    function getRecievedDeeds() view external returns (uint256 [] memory rDeedId, uint256 [] memory _sourceChain);

    function viewDeed(uint256 _sourceChain, uint256 _deedId) view external returns (RegisteredDeed memory _rDeed);

    function findDeed(uint256 _sourceChain, uint256 _deedId) view external returns (RegisteredDeed memory _rDeed);
    
}