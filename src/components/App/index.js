import React from 'react';
import {Container } from "@material-ui/core";
import {ConvertNumberForm, OutputList} from "../"; 
const App = () => {

  return (
    <Container maxWidth="lg" >
      <ConvertNumberForm/>
      <OutputList/>
    </Container>
  );
}

export default App;
