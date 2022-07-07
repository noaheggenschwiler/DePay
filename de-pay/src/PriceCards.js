import React from 'react';
import Box from '@mui/material/Box';
import { CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import bitcoin from "./images/bitcoin.png";
import ethereumLogo from "./images/Ethereum-Logo.png";
import chainlink from "./images/chainlink-logo.jpeg";
import synthetix from "./images/synthetix.png";
import crudeoil from "./images/crudeoil.jpeg";
import tesla from "./images/tesla.jpeg";
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const PriceCards = ({BTCPrice, ETHPrice, LINKPrice, SNXPrice, OILPrice, TSLAPrice}) => {
    return (
        <Grid container paddingLeft={4} spacing={4} sx={{maxHeight: 705, overflow: 'auto'}}>
            <Grid item>
                <Card variant="outlined" sx={{minWidth: 200, height : 250}}>
                    <CardMedia
                        component="img"
                        height="100"
                        src={bitcoin}
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"> Bitcoin </Typography>
                        <Typography variant="body2" color="text.secondary"> Current Price: ${BTCPrice}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="https://bitcoin.org/en/" size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card variant="outlined" sx={{ minWidth: 200, height : 250}}>
                    <CardMedia
                        component="img"
                        height="100"
                        src={ethereumLogo}
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"> Ethereum </Typography>
                        <Typography variant="body2" color="text.secondary"> Current Price: ${ETHPrice} </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="https://ethereum.org/en/" size="small">Learn More</Button>
                    </CardActions> 
                </Card>
            </Grid>
            <Grid item>
                <Card variant="outlined" sx={{minWidth: 200, height : 250}}>
                    <CardMedia
                        component="img"
                        height="100"
                        src={chainlink}
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"> Chainlink </Typography>
                        <Typography variant="body2" color="text.secondary"> Current Price: ${LINKPrice} </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="https://chain.link/" size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card variant="outlined" sx={{ minWidth: 200, height : 250}}>
                    <CardMedia
                        component="img"
                        height="100"
                        src={synthetix}
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"> Synthetix </Typography>
                        <Typography variant="body2" color="text.secondary"> Current Price: ${SNXPrice} </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="https://synthetix.io/" size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card variant="outlined" sx={{ minWidth: 200, height : 250}}>
                    <CardMedia
                        component="img"
                        height="100"
                        src={crudeoil}
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"> Crude Oil </Typography>
                        <Typography variant="body2" color="text.secondary"> Current Price: ${OILPrice} </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="https://finance.yahoo.com/quote/CL=F/" size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card variant="outlined" sx={{ minWidth: 200, height : 250}}>
                    <CardMedia
                        component="img"
                        height="100"
                        src={tesla}
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"> Tesla </Typography>
                        <Typography variant="body2" color="text.secondary"> Current Price: ${TSLAPrice} </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="https://www.tesla.com/" size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default PriceCards;