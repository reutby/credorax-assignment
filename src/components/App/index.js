import React from 'react';
import { Container, Grid,FormControlLabel,Switch } from "@material-ui/core";
import { ConvertNumberForm, HistoryList } from "../";

import useStyles from "./styles/App";
const App = () => {

  const classes = useStyles();

  return (
    <Container className={classes.topContainer} maxWidth="md" >
      <FormControlLabel  labelPlacement="bottom" className={classes.darkModeSwitch}
        control={<Switch checked={false} onChange={()=>{}} name="darkMode" />}
        label="DarkMode"
      />
      <Grid container  spacing={3} className={classes.secondaryContainer}>

        <Grid className={classes.gridItem} item md={6} xs={12} >
          <ConvertNumberForm />
        </Grid>
        <Grid className={classes.gridItemHistory} item md={6} xs={12}>
          <HistoryList />

        </Grid>

      </Grid>



    </Container>
  );
}

export default App;
