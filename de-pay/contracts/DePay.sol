//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract DePay {
    //Bitcoin Price
    AggregatorV3Interface priceFeedBTC;

    //ETH Price
    AggregatorV3Interface priceFeedETH;

    //LINK Price Feed
    AggregatorV3Interface priceFeedLINK;

    //MATIC Price Feed
    AggregatorV3Interface priceFeedMATIC;

    //Constructor
    constructor() {
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
    }

    //Get Current Price of the 4 Cryptocurrencies that are displayed in DePay
    function getCurrentPrices()
        public
        view
        returns (
            int256,
            int256,
            int256
        )
    {
        (, int256 priceBTC, , , ) = priceFeedBTC.latestRoundData();
        (, int256 priceETH, , , ) = priceFeedETH.latestRoundData();
        (, int256 priceLINK, , , ) = priceFeedLINK.latestRoundData();

        return (priceBTC, priceETH, priceLINK);
    }
}
