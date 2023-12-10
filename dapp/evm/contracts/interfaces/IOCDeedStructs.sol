// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;

enum AssetType {ERC20, ERC721, ERC1155}

struct Asset {
    uint256 idOnContract; 
    address assetContract;
    uint256 deedCommittedBalance; 
    AssetType assetType;  
}

struct Deed {
    address owner; 
    Asset [] assets;  
}

enum Status {REGISTERED, DEREGISTERED, IMPORTED, EXPORTED}

struct RegisteredDeed{
    address owner; 
    address vault; 
    uint256 registrationId;
    uint256 issueDate;  
    uint256 valueOnIssueDate; 
    uint256 nativeChainId; 
    Status status; 
}