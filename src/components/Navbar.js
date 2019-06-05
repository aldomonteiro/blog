import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function NavBar () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Button component={Link} to={"/"}>
            Home
            </Button>
          <Button component={Link} to={"/about"}>
            About Me
            </Button>
          <Button component={Link} to={"/contact"}>
            Contact
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
