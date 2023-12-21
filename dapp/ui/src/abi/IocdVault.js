export const iOcdVaultAbi = [
	{
		"inputs": [],
		"name": "getAssetCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_assetCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStoredValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc20",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_deedId",
				"type": "uint256"
			}
		],
		"name": "initialize",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_initialized",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "idOnContract",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "assetContract",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "deedCommittedBalance",
						"type": "uint256"
					},
					{
						"internalType": "enum AssetType",
						"name": "assetType",
						"type": "uint8"
					}
				],
				"internalType": "struct Asset",
				"name": "_asset",
				"type": "tuple"
			}
		],
		"name": "storeAsset",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_storedCount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "idOnContract",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "assetContract",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "deedCommittedBalance",
						"type": "uint256"
					},
					{
						"internalType": "enum AssetType",
						"name": "assetType",
						"type": "uint8"
					}
				],
				"internalType": "struct Asset",
				"name": "_asset",
				"type": "tuple"
			}
		],
		"name": "storeNativeCurrency",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_storedCount",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawAssets",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "idOnContract",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "assetContract",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "deedCommittedBalance",
						"type": "uint256"
					},
					{
						"internalType": "enum AssetType",
						"name": "assetType",
						"type": "uint8"
					}
				],
				"internalType": "struct Asset[]",
				"name": "_assets",
				"type": "tuple[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

