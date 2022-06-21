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


const LeftPanel = () => {
    return (
        <Box sx={{
            backgroundColor : '#283149',
            height : '100vh',
        }} flex={1}>
            <CardMedia 
                component="img"
                height="160"
                src={logo}
            ></CardMedia>
            <Typography variant='h4' align='center' color='white' sx={{
                paddingTop : '20px'
            }}> Recent Research Papers </Typography>
            <Paper elevation={3} sx={{overflow: 'auto', margin: "10px",}}>
            </Paper>
        </Box>
    )
}

export default LeftPanel;