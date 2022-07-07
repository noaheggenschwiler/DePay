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
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import Message from './Message.js'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const abi = require("./utils/DePay.json");

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

    const [headers, setHeaders] = useState([]);
    const [rows, setRows] = useState([]);

    const currentAddress = "0x8Df25c3B2FeF66811E8cDe8E09244fB28bcF7046"

    //let rows = [{ethSent : "0.005", recipientAddress : "0xdlwkfjwe;lfkj"}];

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
        setMessage("MetaMask Wallet is Connected");
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

            //Now Make a State Change To Recent Transactions
            const contractAddress = currentAddress;
            const contractABI = abi.abi;
            let contract = new ethers.Contract(contractAddress, contractABI, signer);
            const tx2 = await contract.addTransaction(ethers.utils.parseEther(amountETH), reciever);

            setType("success");
            let successMsg = 'Sucessfully Sent ETH to: \n' + reciever;
            setMessage(successMsg);
            setOpen(true);
            getData();

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

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
    ]

    function createData(ethSentCopy, recipientAddressCopy){
        return {ethSent : ethSentCopy, recipientAddress : recipientAddressCopy}
    }

    const getData = async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contractAddress = currentAddress;
        const contractABI = abi.abi;
        let contract = new ethers.Contract(contractAddress, contractABI, provider);
        let counter = await contract.arrayCounter();
        counter = counter.toNumber();
        //Create a Temporary List To Pass To Rows
        let temp = []
        for(let i = 0; i < counter; i++){
            let tempValues = await contract.getTransaction(i);
            let eth = ethers.utils.formatUnits(tempValues[0].toString(), 18);
            //Amount of ETH Sent
            eth = parseFloat(eth);
            // Address Sent To
            let tempAddress = tempValues[1];
            temp.push(createData(eth, tempAddress));
        }

        temp.reverse();

        setRows(temp);
    }

    useEffect(() => {
        getData();
    })


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
                <Divider></Divider>
                <Paper elevation={5} sx={{overflow: 'auto', margin: "5px",}}>
                        <Typography variant='h5' align='center' color='#283149' fontWeight="bold" sx={{
                            paddingTop : '10px',
                        }}> Recent Transactions </Typography>
                    <TableContainer sx={{maxHeight: 220, maxWidth : 600}}>
                    <Table stickyHeader sx={{overflow:'auto'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell> Amount of ETH</TableCell>
                                <TableCell align="right">Recipient</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.reverse().map((row) => (
                                <TableRow key={row.index}>
                                    <TableCell> {row.ethSent} </TableCell>
                                    <TableCell align="right"> {row.recipientAddress}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Paper>
                </Stack> 
        </Box>
    )

}

export default Payment;