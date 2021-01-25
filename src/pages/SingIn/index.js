import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  Typography  from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
    root: {
     height: '100vh'
    },

    image:{
    backgroundImage: 'url(/images/background.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',

    },

    avatar: {

        background: theme.palette.primary.main,
    }

  }));

function SignIn(){
    const classes = useStyles();
return (
    <Grid container className={classes.root}>
       <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        md={7}
        className={classes.image}
      >
        <Typography style={{ color: '#fff', fontSize: 22, lineHeight: '45px' }}>
          <strong>
            Simplificando a forma de conectar desenvolvedores de software!
          </strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: 'rgb(255,255,255, 0.7)',
            marginTop: 30,
            fontSize: 15,
            lineHeight: '30px',
          }}
        >
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
          software.
        </Typography>
      </Grid>
    <Grid item md={5}>
          <Box display= "flex" flexDirection = "column" alignItems = "center" m={8}>
          <Avatar className ={classes.avatar}>
        <LockOutlinedIcon />

          </Avatar>
          <form>
          <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  
                />

</form>
          </Box>


    </Grid>
    </Grid>

   
    
)

}
export default SignIn;