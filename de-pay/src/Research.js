import React from 'react';
import axios from 'axios';
import Component from 'react';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import { CardContent, Typography, Button, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'

class Research extends React.Component {

    state = {
        titles : [],
        links : [],
        summary : []
    }

    constructor(){
        super();
        try{
            axios.get("https://export.arxiv.org/api/query?search_query=blockchain&sortBy=lastUpdatedDate&sortOrder=descending&start=0&max_results=20")
            .then(res => {
                let data = res.data;
                let domparser = new DOMParser();
                let doc = domparser.parseFromString(data, "text/xml");
                let entry = doc.getElementsByTagName("entry");
                let link = [];
                let title = [];
                let summaries = [];
                for (let i=0; i < entry.length; i++) {
                    link[i] = entry[i].querySelector('[title=pdf]').getAttribute("href");
                    title[i] = entry[i].querySelector("title").innerHTML;
                    summaries[i] = entry[i].querySelector("summary");
                }
                let parsedSummaries = [];
                parsedSummaries= summaries.map(i => { return (i.innerHTML.slice(0, 400) + "...") });
                this.setState({titles : title})
                this.setState({links: link})
                this.setState({summary: parsedSummaries})
            })
        } catch(error){
            console.log(error);
        }

    }

    render() {
        let cardList = [];
        for(let i = 0; i < this.state.titles.length; i++ ){
            cardList.push(
                <ListItem>
                    <Card>
                        <CardContent>
                            <Typography sx={{fontWeight:'bold'}}> {this.state.titles[i]} </Typography>
                            <br></br>
                            <Typography component="div"> {this.state.summary[i]} </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={this.state.links[i]}>View Paper</Button>
                        </CardActions>
                    </Card>
                </ListItem>

            )
        }
        return (
             <Stack spacing={1} sx={{maxHeight: 625, overflow: 'auto'}}>
                  {cardList}
             </Stack>
        )
    }
}  

export default Research;
