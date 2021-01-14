import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Bell} from 'react-feather';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    AppBar: {
        boxShadow:'none',
    },
    img:{
        maxHeight: 55,
    },
    grow:{
        flexGrow: 1,
    
    },
    userSection:{
        display:'flex',
        alignItems:'center',

    },
    button:{
        marginRight:10
    },
    bell:{
        marginRight:10
    }
    
});

function Header() {
    const classes = useStyles();
return (

     <AppBar position="fixed" color="inherit" className={classes.AppBar}>
         <Toolbar>
             <img src = "/images/logo.png" alt = "logo" className = {classes.img} />
             <div className = {classes.grow}> </div>
             <div className = {classes.userSection}> </div>
            <Button variant = "contained" color = "primary" className={classes.button}>
            Novo post

            </Button>

            <Avatar alt="Remy Sharp" src="images/avatar.png" />
            <SvgIcon className={classes.bell}>
                <Bell></Bell>
            </SvgIcon>

             

        {/* <div>
       <a href="/"> Conecta dev- Alteração </a>
       <input type = "text"></input>
        </div> */}

        </Toolbar>
    </AppBar>
    )
}

export default Header;