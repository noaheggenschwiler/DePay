import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import logo from './images/Logo.png';
import { Typography } from '@mui/material';
import useEffect from "react";
import Button from '@mui/material/Button';
import Research from "./Research"; 
import Stack from '@mui/material/Stack';

const LeftPanel = () => {


    return (
        <Box sx={{
            backgroundColor : '#283149',
            height : '100vh',
        }} flex={1}>
            <Stack>
            <CardMedia 
                component="img"
                height="160"
                src={logo}
            ></CardMedia>
            <Typography variant='h4' align='center' color='white' sx={{
                paddingTop : '20px', paddingBottom : '20px'
            }}> Recent Research Papers </Typography>
            <Research color="white"></Research>
            </Stack>
        </Box>
    )
}

export default LeftPanel;