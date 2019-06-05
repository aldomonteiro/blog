import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import github from '../..//img/github-icon.svg'
import facebook from '../../img/social/facebook.svg';
import twitter from '../../img/social/twitter.svg'

import profilePic from '../../img/profile-picture.jpg';

const useStyles = makeStyles(theme => ({
  card: {
    width: `97vw`,
    margin: 5,
  },
  avatar: {
    height: 160,
    width: 160,
  },
}));

function PersonalCard () {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Profile Picture"
            alt="Profile Picture"
            src={profilePic}
            className={classes.avatar} />
        }
        title={
          <Typography variant="h3" component="h3">
            Aldo Monteiro
        </Typography>
        }
        subheader={
          <>
            <Typography variant="h6" component="p">
              Senior software engineer and agile manager. React, and Node.js enthusiast.
          </Typography>
            <CardActions disableSpacing>
              <IconButton aria-label="Github">
                <img
                  src={github}
                  alt="Github"
                  style={{ width: '1em', height: '1em' }}
                />
              </IconButton>
              <IconButton aria-label="Facebook">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </IconButton>
              <IconButton aria-label="Twitter">
                <img
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em' }}
                />
              </IconButton>
            </CardActions>
          </>
        }
      />
    </Card>
  );
}

export default PersonalCard;
