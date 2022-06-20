import React from 'react';
import Box from '@mui/material/Box';
import { Alert, ButtonGroup, Dialog, DialogContent, DialogContentText, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCard from '@mui/icons-material/AddCard';
import TextField from '@mui/material/TextField';
import Paid from '@mui/icons-material/Paid';
import {ethers} from "ethers";
import { useEffect, useState , useRef} from "react";
import InputAdornment from '@mui/material/InputAdornment';
import Message from './Message.js'

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
    const [message, setMessage] = useState("");

    // Used for Setting Type of Message to Display, if Transaction is successful or not
    const [msgType, setType] = useState("");

    //Used For Opening Error Messages
    const [open, setOpen] = useState(true);

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
        setMessage("MetaMask Wallet Already Connected");
        setType("success")
        setOpen(true);
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
            let validAddress = ethers.utils.isAddress(reciever);
            if(validAddress == false){
                throw new Error("Invalid Address");
            }
            const tx = await signer.sendTransaction({
                to : reciever,
                value : ethers.utils.parseEther(amountETH),
            })
            setType("success");
            let successMsg = 'Sucessfully Sent ETH to: \n' + reciever;
            setMessage(successMsg);
            setOpen(true);
        } catch(err){
            console.log(err.message);
            setOpen(true);
            setType("err");
            if(err.message == "Invalid Address"){
                setMessage("Payment Failed, Invalid Address"); 
            }
            else{
                setMessage("Payment Failed"); 
            }

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
                <Message message={message} type={msgType} open={open} setOpen={setOpen}/> 
            </Stack> 
        </Box>
    )
}

export default Payment;