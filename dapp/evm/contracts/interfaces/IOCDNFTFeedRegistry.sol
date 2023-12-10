// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.23;


interface IOCDNFTFeedRegistry {

    function hasFeed(address _nftContract) view external returns (bool _hasFeed);

    function getFeed(address _nftContract) view external returns (address _chainlinkFeed);

}