# Deployed Contracts

The contracts for the On Chain Deed project can be deployed using Remix according to the following Deployment order:
- OCDOpsRegister.sol
- OCDVaultFactory.sol 
- OCDDeedOwnershipToken.sol
- OCDeedOracle.sol
- OCDDeedRegister.sol

The following configurations need to be set post deployment:
### OpsRegister.sol 
The following parameters need to be configured for the OpsRegister.sol
 - "RESERVED_OCD_ADMIN" - address of the admin account for OCD
 - "MAX_ASSET_COUNT_PARAMETER" - maximum number of assets permitted in a deed - *default* 10
 - "STANDARD_DECIMALS_PARAMETER" - standard number of decimals for the quote currency - *default* 18

## Deployment Addresses 
The following are the deployment addresses for the project on the Mode Test Net id (919)

| Chain        | Chain Id   |  Contract               | Address                                    | Description |
|--------------|------------|-------------------------|--------------------------------------------|-------------|
| Mode Testnet |    919     | OCDOpsRegister          | 0x1062DC4b8f374E6614EC6b6e1020AA5dACd38257 |             |

For a listing of the latest configuration on the Mode Testnet use :*[getRegistrations](https://sepolia.explorer.mode.network/address/0x1062DC4b8f374E6614EC6b6e1020AA5dACd38257?tab=read_contract)*


