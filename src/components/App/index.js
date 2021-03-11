import React, { useState } from 'react';
import { Container, Grid, FormControlLabel, Switch, Typography } from "@material-ui/core";
import { ConvertNumberForm, HistoryList } from "../";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import ConvertNumberToEnglish from "../../helpers/convert-function";

import useStyles from "./styles/App";
const App = () => {
  const [result, setResult] = useState(null);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [historyList, setHistoryList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  });

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  }

  const onDeleteItemHandler = (id) => {
    setHistoryList((prev) => prev.filter((item) => item.id !== id));
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      const currentResult = ConvertNumberToEnglish(input);
      setResult(currentResult);
      setError(null);
      console.log(currentResult);
      setHistoryList((prev) => [...prev, {
        result: currentResult,
        timestamp: new Date(),
        id: prev.length
      }
      ]);
      console.log(historyList);

    } catch (error) {
      setError(error.error);
      setResult(null);
    }

    onClearHandler();
  }
  const onClearHandler = (e) => {
    setInput('');

  }
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
      <CssBaseline />

      <Container className={classes.topContainer} maxWidth="md" >
        <FormControlLabel labelPlacement="bottom" className={classes.darkModeSwitch}
          control={<Switch checked={isDarkMode} onChange={ToggleDarkTheme} name="darkMode" />}
          label="DarkMode"
        />
        <Grid container spacing={3} className={classes.secondaryContainer}>

          <Grid className={classes.gridItem} item md={6} xs={12} >
            <ConvertNumberForm onSubmit={onSubmitHandler} onClear={onClearHandler} onChange={onChangeHandler} value={input} />
            <Typography variant="h4" className={classes.title}>Result:</Typography>
            {result && <Typography
              className={classes.result}
              variant="body2">
              {result}
            </Typography>}
            {error && <Typography
              className={classes.result}
              color="error"
              variant="body2">
              {error}
            </Typography>}

          </Grid>
          <Grid className={classes.gridItemHistory} item md={6} xs={12}>
            <HistoryList list={historyList} onDeleteItem={onDeleteItemHandler} />

          </Grid>

        </Grid>



      </Container>
    </MuiThemeProvider>
  );
}

export default App;
