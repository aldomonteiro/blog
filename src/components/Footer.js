import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function MadeWithLove () {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Made with love and Gatsby by Aldo Monteiro. Get the source code '}
      <Link color="inherit" href="https://github.com/aldomonteiro/blog/">
        here
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

function Footer () {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <MadeWithLove />
      </Container>
    </footer>

  );
}



export default Footer;
