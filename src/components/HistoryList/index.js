import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles/HistoryList";

import HistoryItem from "./HistoryItem";
const HistoryList = ({ list, onDeleteItem }) => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4" className={classes.title} >History:</Typography>
            <Grid container spacing={1} className={classes.listHistoryContainer}>
                {
                    list.map((element) => <Grid item key={element.id} className={classes.gridItem} xs={12}>
                        <HistoryItem item={element} onDelete={onDeleteItem} />
                    </Grid>)
                }
            </Grid>
        </div>
    )
}

export default HistoryList;
