import React from 'react';
import {Typography} from "@material-ui/core";
import useStyles from "./styles/HistoryList";
const HistoryList = ()=> {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4" className = {classes.title} >History:</Typography>
        </div>
    )
}

export default HistoryList;
