# DePay : A Decentralized Dashboard with Payment System
![Overview of DePay](https://github.com/noaheggenschwiler/DePay/blob/development/images/Screen%20Shot%202022-07-07%20at%2011.13.24%20AM.png)

## Overview:
DePay is a decentralized dashboard that utilizes the Ethereum blockchain as its backend. This was my first attempt at building a decentralized application, and it helped me understand how to interact with solidity contracts deployed on chain. The contract is deployed on the Kovan testnet. 

Contract Address: 0x8Df25c3B2FeF66811E8cDe8E09244fB28bcF7046

## Hosting Information:
https://noaheggenschwiler.github.io/DePay/ <br>

Please note that your MetaMask wallet must be connected to recieve the price feeds.

## Key Features:
**Recent Research Papers**: The left-hand side of the application displays the 20 most recent Arxiv pre-prints that contain the subject blockchain.

**Payment System**: The middle of the application allows a user to connect their metamask wallet and send ETH to users. Below that is a list of recent transactions that have occured on the DePay Application. This list is maintained within the smart contract, and does incur a slight fee. This method would not be scalable, as you wouldn't want to store data that type of data on-chain, however, this was just a proof-of-concept to learn solidity. In order to keep data capacity low on-chain, only the 5 most recent transactions are stored.

**Chainlink Price Feeds**: The right-hand side of the application displays recent prices in certain various cryptocurrencies, commodities, and stocks. I just used the price feeds that were available to me on the Kovan testnet.

## Setup Guide:
Must have npm installed.

1. Clone Repository: <br>
```
$ git clone https://github.com/noaheggenschwiler/DePay.git
```

2. Change Directory To de-pay: <br>
```
$ cd de-pay
```

3. Install Dependencies: <br>
```
$ npm install
```

4. Run Locally: <br>
```
$ npm start
```

