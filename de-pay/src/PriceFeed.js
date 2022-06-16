import React from 'react';
import Box from '@mui/material/Box';
import { CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import bitcoin from "./images/bitcoin.png";
import ethereumLogo from "./images/Ethereum-Logo.png";
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const PriceFeed = () => {
    return (
    <Box sx={{
            backgroundColor : '#283149',
            height : '100vh',
        }} flex={1}>
            <Stack direction="column" spacing={2} alignItems="center" overflow="auto">
                <Typography variant="h1" align="center" color="white" fontSize={50} fontWeight="bold" paddingTop={5}> Current Price Feed </Typography>
                <List sx={{maxHeight: 600, overflow: 'auto'}}>
                    <ListItem>
                        <Card variant="outlined" sx={{ width: 400, maxHeight : 250}}>
                            <CardMedia
                                component="img"
                                height="100"
                                src={bitcoin}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div"> Bitcoin </Typography>
                                <Typography variant="body2" color="text.secondary"> Current Price: $21,344</Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://bitcoin.org/en/" size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                    <ListItem>
                        <Card variant="outlined" sx={{ width: 400, maxHeight : 250}}>
                            <CardMedia
                                component="img"
                                height="100"
                                src={ethereumLogo}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div"> Ethereum </Typography>
                                <Typography variant="body2" color="text.secondary"> Current Price: $21,344 </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://ethereum.org/en/" size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                    <ListItem>
                        <Card variant="outlined" sx={{ width: 400, maxHeight : 250}}>
                            <CardMedia
                                component="img"
                                height="100"
                                src={ethereumLogo}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div"> Ethereum </Typography>
                                <Typography variant="body2" color="text.secondary"> Current Price: $21,344 </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://ethereum.org/en/" size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                    <ListItem>
                        <Card variant="outlined" sx={{ width: 400, maxHeight : 250}}>
                            <CardMedia
                                component="img"
                                height="100"
                                src={ethereumLogo}
                            >
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div"> Ethereum </Typography>
                                <Typography variant="body2" color="text.secondary"> Current Price: $21,344 </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://ethereum.org/en/" size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                </List>
            </Stack>
            
        </Box>

    )
}

export default PriceFeed;