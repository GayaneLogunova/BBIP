import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontSize: 25,
    fontWeight: 100
  }

}));

const defaultProps = {
  bgcolor: 'inherit',
  borderColor: 'white',
  m: 1,
  border: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  style: { width: '7rem', height: '3rem' }

};


export default function NavBar(props) {

    function logout() {
        localStorage.setItem("authToken", "false");
        props.funcIsLogged("false");
        history.push("/registration");
    }

    const classes = useStyles();
    const history = useHistory();

    if (props.isLogged == "true") {
      return (
        <div>
        <AppBar position="static">
            <Toolbar>
              <Typography className={classes.title}> BIG BROTHER ON PRODUCTION </Typography>
              <Typography>
                <Box {...defaultProps} > Pupkin Ivanov </Box> 
              </Typography>
              <Button color="inherit" onClick={() => logout()}>LOGOUT</Button>
            </Toolbar>
        </AppBar>
      </div>
      );
    } 
    else {
      return (
        <div>
        <AppBar position="static">
            <Toolbar>
              <Typography className={classes.title}> BIG BROTHER ON PRODUCTION </Typography>
              <Button color="inherit">LOGIN</Button>
            </Toolbar>
        </AppBar>
      </div>
      );
    }
}
