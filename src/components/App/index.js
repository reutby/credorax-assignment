import React, { useState } from 'react';
import { Container, Grid, FormControlLabel, Switch } from "@material-ui/core";
import { ConvertNumberForm, HistoryList } from "../";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';

import useStyles from "./styles/App";
const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  });

  const ToggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setIsDarkMode((prev => !prev));
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  }
  const muiTheme = createMuiTheme(theme);

  const classes = useStyles();

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline/>

      <Container className={classes.topContainer} maxWidth="md" >
        <FormControlLabel labelPlacement="bottom" className={classes.darkModeSwitch}
          control={<Switch checked={isDarkMode} onChange={ToggleDarkTheme} name="darkMode" />}
          label="DarkMode"
        />
        <Grid container spacing={3} className={classes.secondaryContainer}>

          <Grid className={classes.gridItem} item md={6} xs={12} >
            <ConvertNumberForm />
          </Grid>
          <Grid className={classes.gridItemHistory} item md={6} xs={12}>
            <HistoryList />

          </Grid>

        </Grid>



      </Container>
    </MuiThemeProvider>
  );
}

export default App;
