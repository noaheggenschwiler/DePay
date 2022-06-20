import React from 'react';
import Alert from '@mui/material/Alert';
import { Collapse, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Payment from './Payment';


const Message = ({message, type, open, setOpen}) => {

    if(!message) return null;
    
    if(type == "err"){
        return(
            <Collapse in={open}>
                 <Alert severity='error' action={
                     <IconButton aria-label='close' color='inherit' size='small'
                     onClick={() => {
                        setOpen(false);
                     }}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                 }> {message} </Alert>
            </Collapse>     
        )
    }
    else if(type == "success"){
        return(
            <Collapse in={open}>
                 <Alert severity='success' action={
                     <IconButton aria-label='close' color='inherit' size='small'
                     onClick={() => {
                        setOpen(false);
                     }}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                 }> {message} </Alert>
            </Collapse>     
        )
    }
}
export default Message;