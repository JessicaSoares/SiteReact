import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListemItemText from '@material-ui/core/ListemItemText';

// eslint-disable-next-line

const useStyles = makeStyles((theme) => ({
    root:{
        padding: theme.spacing(2),
        widht: 275,
    },
    button:{
        width: '100%',
    }

}));

const tags = [
    {id: 1, name: 'ex1'},
    {id: 2, name: 'ex1'},
    {id: 3, name: 'ex1'},
    {id: 4, name: 'ex1'},
    {id: 5, name: 'ex1'},
    {id: 6, name: 'ex1'},
]



function NavBar(){
    const classes = useStyles();

return(
    <Paper>

<Button variant = "outlined" color = "secondary" className = {classes.button}>Registrar grátis</Button>
        <ListSubheader>{'Tags em alta'}</ListSubheader>
        {
        tags.map((item => (
            <ListItem dense button key= {`item-${item.id}-${item.name}`}>
            <ListemItemText primary = {`#${item.name}`}/>
            </ListItem>
           
        ))
        }

     
        )}
    </Paper>
})

export default NavBar;






       