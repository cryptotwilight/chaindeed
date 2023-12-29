# On Chain Deeds 
Welcome to the On Chain Deed repository. The On Chain Deed project is being built to provide users with a new more convinient way of doing DeFi. In short user assets by nature are scattered on blockchain, a user can have a mix of NFTs and tokens that are not readily 
utilisable in DeFi. The on Chain Deed project provides a way for users to aggregate their assets creating a verified and transferable deed that CAN be used in DeFi. 

To Illustrate a user may have an NFT worth $20, another worth $350 and some cryptocurrency in pots (say 3) of totaling $50 spread across blockchain projects. This gives the user a total of $420 of collateralizable capital. Today it would be a  laborious process to liquidate the NFTs and homogenize the various tokens likely resulting in a realization well below $420. 

By Utilizing an On Chain Deed however the user can codify their NFTs and cryptocurrency assigning them to the Deed. The deed tokenizes the assets storing them away in a verifiable (non custodial) vault and assigning an oracle based value. This deed can be transferred and staked in On Chain Deed Liquidity Pools where the deed holder can borrow against the deed. Should the holder fail to repay the loan by the term the deed is consequently liquidated. Should the value of the deed fall below 10% of it's initial value again the deed will be liquidated. 

This creates a brand new DeFi paradigm that enables users to leverage assets previously rendered "non-functional" due to their low value. 

The On chain Deed project is currently premiering on the Mode Network. 

## Conceptual Overview 
This video describes at a conceptual level how the On Chain Deeds protocol works. [On Chain Deeds Conceptual Overview](https://www.loom.com/share/a56a1ec342c94fe1b55af6053514976f)

### Degen Demo
This is demo is for those true DeFi Degens who are happy to work with raw blockchain data. 
[]()

### UI Demo 
This demo is for normal users who need to use a normal UI
[]()

## Mode Deployment 
For notes on deployment see:
[Deployment](dapp/evm/deploy/README.md)

## UI 
For notes on UI see: 
[UI](dapp/ui/README.md)

## How to Test 
To test the live deployment of the On Chain Deeds project the following steps need to be followed.
There are two types of test, the Degen Test approach and the UI Test approach. 

### Degen Test Approach 
The Degen test approach utilises the raw block explorer to work with the On Chain Deeds blockchain smart contracts hence will give you more functionality. However this is for medium to advanced users. 

1. Ensure you have some kind of assets e.g. cryptocurrency / nfts in your wallet. 
2. Approve the deed register on the contracts for your assets. This is done on the block explorer by going to: [https://sepolia.explorer.mode.network/address/{your token contract address}](https://sepolia.explorer.mode.network/address/) 
    -> you then go to the "Write Contract" and enter the address of the deed register which can be found from the OCD Ops Register [here](https://sepolia.explorer.mode.network/address/0x2A18AE7AdB76DbC40F961c92F461b1c370D33ddd)
3. You then need to create a deed according to the format below: 
    [
        "(your wallet address - replace)",
        [
            ["(id of your nft - replace)", 
             "(address of nft contract - replace)", 
             "1", 
             "1"
            ], *<- format for NFT assets*
            ["0", 
             "(address of erc20 token contract - replace)", 
             "(number of tokens committed to your deed - replace remember to add zeros)", 
             "0"
            ], *<- format for Cryptocurrency assets*
            ... *<- a deed can hold up to 10 assets*
        ],
        "address of contract for cryptocurrency denomination of your deed - replace"
    ]

    below is an example 

    [  
        "0xC1436aD1dAc368a81AF38E25Faf4cCe8872B2746",
        [
            ["0","0x83b3286A15A4197981eEE90d1007ce480fE37BeB","1","1"], 
            ["0","0x379405A108A6206C030e4Ad6fC6983FBCA39cb0C","50000000000000000000","0"],
            ["0","0x71696C45Add5198C1E333bAe5aABC84D41c73c0c","20000000000000000000000","0"],
            ["0","0xbE2B750edc108637abe59b4B8CfC498E632830d7","300000000000000000","0"]
        ],
        "0x379405A108A6206C030e4Ad6fC6983FBCA39cb0C"
    ]
    for testing purposes you can self mint test tokens using the following token contracts 
    -> [0x9a9bb529659fd3157Df551109bD0D0542868ED4A](https://sepolia.explorer.mode.network/address/0x9a9bb529659fd3157Df551109bD0D0542868ED4A?tab=write_contract) - for Test NFTs
    -> [0xA1252b783d76974855a8649c2eF4478Bee96cfB1](https://sepolia.explorer.mode.network/address/0xA1252b783d76974855a8649c2eF4478Bee96cfB1?tab=write_contract) - for Test Cryptocurrency
4. You then need to paste your above deed as (as a single line) in the deed register contract 