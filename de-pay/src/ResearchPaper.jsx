import React from 'react';
import { Typography } from '@mui/material';
import {Box, Stack, Paper} from '@mui/material/';

const ResearchPaper =() => {

    let parsed = new Array();

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://export.arxiv.org/api/query?search_query=cat:cs.GL&sortBy=lastUpdatedDate&sortOrder=descending&start=0&max_results=10", true);
    const apiCall = async() => {
        xhr.onreadystatechange = function() {
        // Check to make sure XMLHttpRequest has finished 
        if (this.readyState === this.DONE) {
        
            // Check to make sure request was successful 
            const status = this.status;
            
            if (status == 200) {
            
                // Do something with successful response
                let domparser = new DOMParser();
                let doc = domparser.parseFromString(this.responseText, "text/xml");
                let entry = doc.getElementsByTagName("entry");
                let link = [];
                let titles = [];
                let summaries = [];
                for (let i=0; i < entry.length; i++) {
                    link[i] = entry[i].querySelector('[title=pdf]').getAttribute("href");
                    titles[i] = entry[i].querySelector("title");
                    summaries[i] = entry[i].querySelector("summary");
                }

                let parsedSummaries = [];
                parsedSummaries= summaries.map(i => { return i.innerHTML.slice(0, 400) });
                for (let i = 0; i < link.length; i++) {
                    //console.log(titles[i].innerHTML)
                    let title = titles[i].innerHTML;
                    let linkTemp = link[i];
                    let summary = parsedSummaries[i];
                    parsed.push({title})
                }

            } else {
                console.log("An error occurred. Try Again.");
            }
            
        }

    };

    }
    xhr.send();

    //console.log(componentArray);
    return(
        <div>
            {parsed}
        </div>
    )

}    

export default ResearchPaper;
    
