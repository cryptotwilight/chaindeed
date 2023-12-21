export const iOcdOpsRegisterAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "getAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getChainId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_chainId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "getParameter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_parameter",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]