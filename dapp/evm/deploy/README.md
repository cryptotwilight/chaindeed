# Deployed Contracts

The contracts for the On Chain Deed project can be deployed using Remix according to the following Deployment order:
- OCDOpsRegister.sol
- OCDVaultFactory.sol 
- OCDDeedOwnershipToken.sol
- OCDeedOracle.sol
- OCDDeedRegister.sol
- OCDLiquidityPool.sol

The following configurations need to be set post deployment:
### OpsRegister.sol 
The following parameters need to be configured for the OpsRegister.sol
 - "RESERVED_OCD_ADMIN" - address of the admin account for OCD
 - "MAX_ASSET_COUNT_PARAMETER" - maximum number of assets permitted in a deed - *default* 10
 - "STANDARD_DECIMALS_PARAMETER" - standard number of decimals for the quote currency - *default* 18
 - "MODE_SEQUENCER_FEE_SHARING" - set to [0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6](https://sepolia.explorer.mode.network/address/0xBBd707815a7F7eb6897C7686274AFabd7B579Ff6) on Mode Testnet

## Deployment Addresses 
The following are the deployment addresses for the project on the Mode Test Net id (919)

| Chain        | Chain Id   |  Contract               | Address                                    | Description |
|--------------|------------|-------------------------|--------------------------------------------|-------------|
| Mode Testnet |    919     | OCDOpsRegister          | 0x2A18AE7AdB76DbC40F961c92F461b1c370D33ddd |             |
| Mode Testnet |    919     | OCD Test NFT            | 0x9a9bb529659fd3157Df551109bD0D0542868ED4A |             |
| Mode Testnet |    919     | OCD Test Cryptocurrency | 0xA1252b783d76974855a8649c2eF4478Bee96cfB1 |             |

For a listing of the latest configuration on the Mode Testnet use :*[getRegistrations](https://sepolia.explorer.mode.network/address/0x2A18AE7AdB76DbC40F961c92F461b1c370D33ddd?tab=read_contract)*


