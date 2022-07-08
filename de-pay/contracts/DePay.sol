//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

/**
 * DePay Contract
 * Utilizes Chainlink AggregatorV3Interface to retrun price feeds that are fed to the front-end
 * Additionally maintains a list of recent transactions that have occured on the DePay application
 */
contract DePay {
    //Bitcoin Price
    AggregatorV3Interface priceFeedBTC;

    //ETH Price
    AggregatorV3Interface priceFeedETH;

    //LINK Price Feed
    AggregatorV3Interface priceFeedLINK;

    //Synthetix Price Feed
    AggregatorV3Interface priceFeedSNX;

    //Crude Oil Price Feed
    AggregatorV3Interface priceFeedOIL;

    //TSLA Price Feed
    AggregatorV3Interface priceFeedTSLA;

    // Struct For Maintaining a Recent Transactions
    struct Transaction {
        uint256 amount;
        address reciever;
    }

    // Array of Recent Transactions that Occurred on Depay
    // This wouldn't be scalable in a production environment
    // Therefore, only keeping the 5 most recent transactions
    Transaction[] public recentTransactions;

    //Counter for Length of the Array (Needed in Frontend)
    uint256 public arrayCounter;

    //Constructor
    constructor() {
        arrayCounter = 0;

        //BTC Price Feed
        priceFeedBTC = AggregatorV3Interface(
            0x6135b13325bfC4B00278B4abC5e20bbce2D6580e
        );

        //ETH Price Feed
        priceFeedETH = AggregatorV3Interface(
            0x9326BFA02ADD2366b30bacB125260Af641031331
        );

        //LINK Price Feed
        priceFeedLINK = AggregatorV3Interface(
            0x396c5E36DD0a0F5a5D33dae44368D4193f69a1F0
        );

        //SNX Price Feed
        priceFeedSNX = AggregatorV3Interface(
            0x31f93DA9823d737b7E44bdee0DF389Fe62Fd1AcD
        );

        priceFeedOIL = AggregatorV3Interface(
            0x48c9FF5bFD7D12e3C511022A6E54fB1c5b8DC3Ea
        );

        priceFeedTSLA = AggregatorV3Interface(
            0xb31357d152638fd1ae0853d24b9Ea81dF29E3EF2
        );
    }

    /**
     * Get Current Price of the Cryptocurrencies, Commodities, Stock, that are displayed in DePay
     * @return - price of the above mentioned values
     */
    function getCurrentPrices()
        public
        view
        returns (
            int256,
            int256,
            int256,
            int256,
            int256,
            int256
        )
    {
        (, int256 priceBTC, , , ) = priceFeedBTC.latestRoundData();
        (, int256 priceETH, , , ) = priceFeedETH.latestRoundData();
        (, int256 priceLINK, , , ) = priceFeedLINK.latestRoundData();
        (, int256 priceSNX, , , ) = priceFeedSNX.latestRoundData();
        (, int256 priceOIL, , , ) = priceFeedOIL.latestRoundData();
        (, int256 priceTSLA, , , ) = priceFeedTSLA.latestRoundData();

        return (priceBTC, priceETH, priceLINK, priceSNX, priceOIL, priceTSLA);
    }

    /**
     * Add the most recent transaction to the array of transactions
     * @param amount - amount of ETH that was sent in transaction
     * @param reciever - address that recieved the ETH
     */
    function addTransaction(uint256 amount, address reciever) public {
        Transaction memory temp = Transaction(amount, reciever);

        if (recentTransactions.length == 5) {
            //Array is Too Long, Remove the Oldest Transaction
            for (uint256 i = 0; i < recentTransactions.length - 1; i++) {
                recentTransactions[i] = recentTransactions[i + 1];
            }
            //Then Add Newest Transaction To End Of Array
            recentTransactions[4] = temp;
        } else {
            recentTransactions.push(temp);
            // Only Increasing in this section because it will reach maximum
            // Assigning in above if statement is a waste of gas
            arrayCounter += 1;
        }
    }

    /**
     * View only function that gets the transaction in the array based on the index
     * @param _index - index in the array
     * @return amount of ETH sent and the address that recieved the ETH
     */
    function getTransaction(uint256 _index)
        public
        view
        returns (uint256, address)
    {
        return (
            recentTransactions[_index].amount,
            recentTransactions[_index].reciever
        );
    }
}
