import React from 'react';
//import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Components/Header.js';
import Feed from './Components/Feed.js';
import NavBar from './Components/NavBar.js';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles({
  root: {

  display : 'flex',
  flexDirection: 'column',
 
  },
  main: {
  height: '100vh',
  padding: '24px',  

  },
  toolbar:{
    minHeight: '64px',
  }
});

function Home(){
  const classes = useStyles();
return (

  <div className = {classes.root}>
    <Header />

    <div className = {classes.toolbar}> </div>
    <main className =  {classes.main}>
      <Container  maxWidth="lg">
        <Box display = "flex">
        <NavBar />
        <Feed />
        </Box>
      </Container >
    </main>
  </div>
  )
}

export default Home;