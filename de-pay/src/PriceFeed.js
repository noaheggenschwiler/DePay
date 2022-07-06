import React from 'react';
import Box from '@mui/material/Box';
import { CardContent, Typography, Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import bitcoin from "./images/bitcoin.png";
import ethereumLogo from "./images/Ethereum-Logo.png";
import chainlink from "./images/chainlink-logo.jpeg";
import poly from "./images/polygon-matic-logo.png";
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PriceCards from './PriceCards';
import { useState, useEffect} from "react";
import {ethers} from "ethers";
const abi = require("./utils/DePay.json");


const PriceFeed = () => {

    const [BTCPrice, setBTCPrice] = useState("");
    const [ETHPrice, setETHPrice] = useState("");
    const [LINKPrice, setLINKPrice] = useState("");
    const [SNXPrice, setSNXPrice] = useState("");
    const {ethereum} = window;

    const getContractPrices = async() => {
        try{
            const { ethereum } = window;
        } catch(err){
            console.log("Houston, we have a problem");
        }

        if (ethereum) {
            const contractAddress = "0xae08cfa86B26Bf2F40EAE37dA821435Bf3568623"
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contractABI = abi.abi;
            const dePayContract = new ethers.Contract(contractAddress, contractABI, signer);
            let values = await dePayContract.getCurrentPrices();
            console.log(values[3]);
            //BTC Price
            let btc = ethers.utils.formatUnits(values[0].toString(), 8);
            btc = parseFloat(btc);
            setBTCPrice(btc.toFixed(2));

            // ETH Price
            let eth = ethers.utils.formatUnits(values[1].toString(), 8);
            eth = parseFloat(eth);
            setETHPrice(eth.toFixed(2));

            // LINK Price
            let link = ethers.utils.formatUnits(values[2].toString(), 8);
            link = parseFloat(link);
            setLINKPrice(link.toFixed(2)); 

            //SNX Price
            let snx = ethers.utils.formatUnits(values[3].toString(), 8);
            snx = parseFloat(snx);
            setSNXPrice(snx.toFixed(2));
        }

    }

    useEffect(() => {
        getContractPrices();
    }, [])


    return (
    <Box sx={{
            backgroundColor : '#283149',
            height : '100vh',
        }} flex={1}>
        <Stack spacing={2}>
            <Typography variant="h1" align="center" color="white" fontSize={50} fontWeight="bold" paddingTop={10}> Current Price Feed </Typography>
            <PriceCards BTCPrice={BTCPrice} ETHPrice={ETHPrice} LINKPrice={LINKPrice} SNXPrice={SNXPrice}></PriceCards>
        </Stack>
    </Box>

    )
}

export default PriceFeed;