import React from 'react'
import { TextField, Button, Typography } from "@material-ui/core";
import useStyles from "./styles/ConvertNumberForm";

const ConvertNumberForm = ({onChange, value, onSubmit, onClear}) => {
    const classes = useStyles();

    return (
        <form className={classes.form}>
            <Typography className={classes.title} variant="h4" >Convert this Number:</Typography>
            <TextField
                variant="standard"
                type="text" 
                onChange={onChange}
                value={value}
                className={classes.textField}
                placeholder="enter a number..."
                InputProps={{
                    classes: {
                        input: classes.input,
                    },
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.label,
                    },
                }}
            ></TextField>
            <div className={classes.buttonsContainer}>
                <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={onSubmit}
                    className={classes.submitButton}
                >Calculate</Button>
                <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    onClick={onClear}
                    
                    className={classes.clearButton}>
                    Clear</Button>
            </div>

        </form>
    )
}

export default ConvertNumberForm;
