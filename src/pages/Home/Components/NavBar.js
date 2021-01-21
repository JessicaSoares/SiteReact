import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// eslint-disable-next-line

const useStyles = makeStyles((theme) => ({
    root:{
        padding: theme.spacing(2),
        widht: 275,
        marginRight:theme.spacing(2),
    },
    button:{
        width: '100%',
    }

}));

const tags = [
    {id: 1, name: 'ex1'},
    {id: 2, name: 'ex2'},
    {id: 3, name: 'ex3'},
    {id: 4, name: 'ex4'},
    {id: 5, name: 'ex5'},
    {id: 6, name: 'ex6'},
]



function NavBar(){
    const classes = useStyles();

return(
    <Paper className ={classes.root}>
        <Button variant = "outlined" color = "secondary" className = {classes.button}> registrar gratis</Button>
        <ListSubheader>{`Tags em alta`}</ListSubheader>
        {
         tags.map((item) =>(
          <ListItem dense button key={`item-${item.id}-${item.name}`}>
           <ListItemText primary={`#${item.name}`} />  
          </ListItem>   
         ))

        }
    </Paper>



)}

export default NavBar;






       