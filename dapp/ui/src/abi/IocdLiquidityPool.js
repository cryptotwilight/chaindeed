export const iOcdLiquidityPoolAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc20",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_deed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_termMonths",
				"type": "uint256"
			}
		],
		"name": "borrow",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_outstandingBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_txId",
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
			}
		],
		"name": "collateraliseDeed",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "deedId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "marketValue",
						"type": "uint256"
					},
					{
						"internalType": "int256",
						"name": "riskDifferentialValue",
						"type": "int256"
					},
					{
						"internalType": "uint256",
						"name": "leanableValue",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "leanRate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					}
				],
				"internalType": "struct Collateral",
				"name": "_collateral",
				"type": "tuple"
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
		"name": "deCollateralizeDeed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_decollateralised",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_erc20",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_maxPeriod",
				"type": "uint256"
			}
		],
		"name": "depositToPool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_txId",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAvailableFundPools",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_amount",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "_erc20",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
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
		"name": "getCollateralValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_collateralValue",
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
			}
		],
		"name": "getLeanableValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_leanableValue",
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
			}
		],
		"name": "getOutstandingBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_outstandingBalance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_txId",
				"type": "uint256"
			}
		],
		"name": "getTransactionById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "erc20",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "enum TxType",
						"name": "txType",
						"type": "uint8"
					}
				],
				"internalType": "struct Transaction",
				"name": "_transaction",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTxIdsByInitiator",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_txIds",
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
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_eerc20",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_deed",
				"type": "uint256"
			}
		],
		"name": "repay",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_outstandingBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_txId",
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
				"name": "_deposittxId",
				"type": "uint256"
			}
		],
		"name": "viewEarnings",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "depositId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "principalAtRisk",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "earningsToDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "exitDate",
						"type": "uint256"
					}
				],
				"internalType": "struct Earnings",
				"name": "_earnings",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewOutstandingBalances",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_loanIds",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_balances",
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
				"name": "_depositTxId",
				"type": "uint256"
			}
		],
		"name": "withdrawFromPool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_txId",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];