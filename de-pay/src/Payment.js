import React from 'react';
import Box from '@mui/material/Box';
import { ButtonGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCard from '@mui/icons-material/AddCard';
import TextField from '@mui/material/TextField';
import Paid from '@mui/icons-material/Paid';

const Payment = () => {
    return (
        <Box sx={{
            backgroundColor : 'white',
            height : '75vh',
        }} flex={1}>
            <Stack direction="column" spacing={4}>
                <Typography variant="h1" align="center" color="#283149" fontSize={50} fontWeight="bold" paddingTop={5}> Pay Friends on the Internet </Typography>
                <TextField id="outlined-basic" label="Amount of ETH" variant="outlined" />
                <TextField id="outlined-basic" label="Recipient Address" variant="outlined" />
                <TextField id="outlined-basic" label="Notes" variant="outlined" />
                <Button variant="contained" startIcon={<AddCard/>}> Connect MetaMask Wallet </Button>
                <Button variant="contained" startIcon={<Paid/>}> Pay </Button>
            </Stack> 
        </Box>
    )
}

export default Payment;