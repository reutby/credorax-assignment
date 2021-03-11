import React from 'react'
import { TextField, Button, Typography } from "@material-ui/core";
import useStyles from "./styles/ConvertNumberForm";

const ConvertNumberForm = () => {
    const classes = useStyles();

    return (
        <form className={classes.form}>
            <Typography className={classes.title} variant="h4" >Convert this Number:</Typography>
            <TextField
                variant="standard"
                type="text" className={classes.textField}
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
                    className={classes.submitButton}
                >Calculate</Button>
                <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    type="submit"
                    className={classes.submitButton}
                >Clear</Button>
            </div>
            <Typography variant="h4" >Result:</Typography>
            <Typography variant="body2">...</Typography>

        </form>
    )
}

export default ConvertNumberForm;
