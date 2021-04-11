# simpleclcosmos

**simpleclcosmos** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).  
It includes a module, clprice, that can connect to the chainlink module.  
If you want your own instance, you will need to deploy and change references to the solidity code, found in the solidity folder.  

## Setup

Serve Earth Blockchain:
```
starport serve -c earth.yml
```  

Serve Mars Blockchain:
```
starport serve -c mars.yml
```  

Configure Relayer:
```
starport relayer configure --advanced --source-rpc "http://0.0.0.0:26657" --source-faucet "http://0.0.0.0:4500" --source-port "clprice" --source-version "clprice-1" --target-rpc "http://0.0.0.0:26659" --target-faucet "http://0.0.0.0:4501" --target-port "clprice" --target-version "clprice-1"
```  

Start Relayer:
```
starport relayer connect
```  

## Normal CRUD:
Add Price:
```
simpleclcosmosd tx clprice create-price “ETH/USD” --from alice --chain-id earth --home ~/.earth
```  

Verify Price was Added:
```
simpleclcosmosd q clprice list-price
```  
