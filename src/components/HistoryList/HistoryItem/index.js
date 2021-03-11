import React from 'react'
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import { Typography, IconButton } from "@material-ui/core"
import useStyles from "./styles/HistoryItem";
const OutputHistory = ({ item, onDelete }) => {
    const classes = useStyles();

    return (
        <div className={classes.itemContainer}>
            <Typography variant="h5" className={classes.result}>{item.result}</Typography>
            <div className={classes.secondRow}>
                <Typography variant="h6">{item.timestamp.toString()}</Typography>
                <IconButton onClick={() => onDelete(item.id)}><DeleteOutline fontSize='large' /></IconButton>
            </div>
        </div>
    )
}
export default OutputHistory;
