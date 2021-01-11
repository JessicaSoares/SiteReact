import React from 'react';
//import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Components/Header.js';
import Feed from './Components/Feed.js';
import NavBar from './Components/NavBar.js';



const useStyles = makeStyles({
  root: {

  display : 'flex',
  flexDirection: 'column',
 
  },
  main: {
  height: '100vh',
  display: 'flex',
  width: '1200px',
  margin: '0 auto',

  }
});

function Home(){
  const classes = useStyles();
return (

  <div className = {classes.root}>
    <Header />

    <div className = 'toolbar'> </div>
    <main className =  {classes.main}>
      <NavBar />
      <Feed />
    </main>
  </div>
  )
}

export default Home;