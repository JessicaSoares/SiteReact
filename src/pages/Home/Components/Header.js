import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    
})

function Header(){
return (
    <header className = 'header'>
    <div className = 'toolbar' >
    <div>
       <a href='/'> Conecta dev- Alteração </a>
    </div>
    <div>
    <Button variant="contained" color="primary">Novo post</Button>
        <span>img1</span>
        <span>img2 </span>
        </div>
    </div>
    </header>
    );
}
export default Header;