import React from 'react';
import Box from '@mui/material/Box';
import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCard from '@mui/icons-material/AddCard';
import TextField from '@mui/material/TextField';
import Paid from '@mui/icons-material/Paid';
import {ethers} from "ethers";
import { useEffect, useState , useRef} from "react";
import InputAdornment from '@mui/material/InputAdornment';

const Payment = () => {
    /*
    * Just a state variable we use to store our user's public wallet.
    */
   // State Variable For Current Account
    const [currentAccount, setCurrentAccount] = useState("");

    // State Variable For Amount of ETH To Send
    const [ amountETH, setAmountETH] = useState("");

    //State Variable For Address To Send ETH To
    const [reciever, setReciever] = useState("");

    //State Variable For Error Handling
    const [error, setError] = useState("");

    //On Change Of Amount ETH Entered
    const handleAmountETHChange = event => {
        setAmountETH(event.target.value);
    };

    //On Change of Address To Send To
    const handleRecieverChange = event => {
        setReciever(event.target.value);
    }

    const checkIfWalletIsConnected = async () => {
        try {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have metamask!");
            return;
        } else {
            console.log("We have the ethereum object", ethereum);
        }
        /*
        * Check if we're authorized to access the user's wallet
        */
        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account:", account);
            setCurrentAccount(account)
        } else {
            console.log("No authorized account found")
        }
        } catch (error) {
        console.log(error);
        }
    }

    /**
     * Implement your connectWallet method here
     */
    const connectWallet = async () => {
        try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask!");
            return;
        }

        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
    checkIfWalletIsConnected();
    }, [])

    // Need To Implement the Pay Function
    const payNow = async () => {
        try{
            if(!window.ethereum){
            throw new Error("No wallet found, please install it.");
            }
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            ethers.utils.getAddress(reciever);
            const tx = await signer.sendTransaction({
                to : reciever,
                value : ethers.utils.parseEther(amountETH),
            })
        } catch(err){
            setError(err);
        } 
    }

    
    return (
        <Box sx={{
            backgroundColor : 'white',
            height : '75vh',
        }} flex={1}>
            <Stack direction="column" spacing={4}>
                <Typography variant="h1" align="center" color="#283149" fontSize={50} fontWeight="bold" paddingTop={5}> Pay Friends on the Internet </Typography>
                <TextField id="outlined-basic" label="Amount of ETH" required variant="outlined" value={amountETH} onChange={handleAmountETHChange}
                 InputProps={{
                    startAdornment: <InputAdornment position="start">ETH: </InputAdornment>,}} />
                <TextField id="outlined-basic" label="Recipient Address" required variant="outlined" value={reciever} onChange={handleRecieverChange} />
                <Button variant="contained" startIcon={<AddCard/>} onClick={connectWallet}> Connect MetaMask Wallet </Button>
                <Button variant="contained" startIcon={<Paid/>} onClick={payNow}> Pay Now </Button>
            </Stack> 
        </Box>
    )
}

export default Payment;