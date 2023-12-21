export const iOcdDeedRegisterAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_registrationId",
				"type": "uint256"
			}
		],
		"name": "deRegisterDeed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_deregistrationDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_transferedAssetCount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rDeedId",
				"type": "uint256"
			}
		],
		"name": "getCurrentValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_rDeedValue",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc20",
				"type": "address"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDeedOwnerIds",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_deedIds",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rDeedId",
				"type": "uint256"
			}
		],
		"name": "getRegisteredDeed",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "vault",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "registrationId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "issueDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "valueOnIssueDate",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "deedDenomination",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "nativeChainId",
						"type": "uint256"
					},
					{
						"internalType": "enum Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct RegisteredDeed",
				"name": "_rDeed",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRegisteredDeeds",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "vault",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "registrationId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "issueDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "valueOnIssueDate",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "deedDenomination",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "nativeChainId",
						"type": "uint256"
					},
					{
						"internalType": "enum Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct RegisteredDeed[]",
				"name": "_rDeeds",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum Status",
				"name": "_status",
				"type": "uint8"
			}
		],
		"name": "getRegisteredDeedsByStatus",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "vault",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "registrationId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "issueDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "valueOnIssueDate",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "deedDenomination",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "nativeChainId",
						"type": "uint256"
					},
					{
						"internalType": "enum Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct RegisteredDeed[]",
				"name": "_rDeeds",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
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
						"name": "assets",
						"type": "tuple[]"
					},
					{
						"internalType": "address",
						"name": "denominationErc20",
						"type": "address"
					}
				],
				"internalType": "struct Deed",
				"name": "_deed",
				"type": "tuple"
			}
		],
		"name": "registerDeed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_registrationId",
				"type": "uint256"
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
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "transferDeed",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "vault",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "registrationId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "issueDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "valueOnIssueDate",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "deedDenomination",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "nativeChainId",
						"type": "uint256"
					},
					{
						"internalType": "enum Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct RegisteredDeed",
				"name": "_rDeed",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum Status",
				"name": "_status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_deedId",
				"type": "uint256"
			}
		],
		"name": "updateDeedStatus",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "vault",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "registrationId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "issueDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "valueOnIssueDate",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "deedDenomination",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "nativeChainId",
						"type": "uint256"
					},
					{
						"internalType": "enum Status",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct RegisteredDeed",
				"name": "_rDeed",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
