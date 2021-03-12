import React from 'react'
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import { Typography, IconButton } from "@material-ui/core"
import useStyles from "./styles/HistoryItem";
const OutputHistory = ({ item, onDelete }) => {
    const classes = useStyles();

    return (
        <div className={classes.itemContainer}>
            <div className={classes.secondRow}>
                <Typography variant="h5" className={classes.result}>{item.result}</Typography>
                <Typography variant="h6">{item.timestamp.substr(0,item.timestamp.indexOf('GMT'))}</Typography>
            </div>
            <IconButton className={classes.deleteButton} onClick={() => onDelete(item.id)}><DeleteOutline fontSize='large' /></IconButton>
        </div>
    )
}
export default OutputHistory;
