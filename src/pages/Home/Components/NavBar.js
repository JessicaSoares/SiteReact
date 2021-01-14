import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line

const useStyles = makeStyles((theme) => ({
    root:{
        padding: theme.spacing(2),
        widht: 275,
    },
    button:{
        width: '100%'
    }

}));



function NavBar(){
    const classes = useStyles();

return(
    <Paper className = {classes.root}>
        <Button variant = "outlined" color = "secondary" className = {classes.button}>Registrar grátis</Button>
    </Paper>
 )
}

export default NavBar;





