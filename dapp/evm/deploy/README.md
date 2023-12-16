# Deployed Contracts

The contracts for the On Chain Deed project can be deployed using Remix according to the following Deployment order:
- OCDOpsRegister.sol
- OCDVaultFactory.sol 
- OCDDeedToken.sol
- OCDNFTFeedRegistry.sol
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
| Mode Testnet |    919     | OCDOpsRegister          | 0xCa0F3Bf43d76e2c783613e5f2f8D9d0B4e6721c4 |             |
| Mode Testnet |    919     | OCDVaultFactory         | 0x78958C6132c72C8aE76ECBC4594ca1A78F0c8049 |             |
| Mode Testnet |    919     | OCDDeedToken            | 0xd8f9b71BD9237CFAF59068eC359383fC95eF6666 |             |

