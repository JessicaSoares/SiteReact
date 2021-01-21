import React from 'react';
import SignIn from './pages/SingIn/index.js';
import Home from './pages/Home/index.js';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
function App() {

  console.log(window.location.href);
  const url = window.location.href

    return (
      <ThemeProvider theme={theme}>
        
          
        <Home />
        <SignIn /> 
      
      </ThemeProvider>
    );
}

export default App;
