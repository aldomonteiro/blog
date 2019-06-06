import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image'
import { Link, navigate } from 'gatsby';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    margin: 10,
  },
  content: {
    height: 80,
  },
  media: {
    width: 400,
  }
});

function PostCard ({ image, title, excerpt, slug }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={() => navigate(slug)} >
      <CardActionArea>
        {/* <Img
            alt={title}
            fixed={image.childImageSharp.resize}
            height={image.childImageSharp.resize.height}
            width={image.childImageSharp.resize.width}
          /> */}
        <CardMedia className={classes.media}>
          <Img alt={title} fluid={image.childImageSharp.fluid} />
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {excerpt}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={slug}>
          Continue Reading...
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostCard;
