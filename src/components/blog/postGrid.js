import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostCard from './postCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function PostGrid (props) {
  const { classes, posts } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {posts.map(({ node: post }, index) => (
          <Grid key={index} item sm={6} md={4} xs={12}>
            <PostCard
              title={post.frontmatter.title}
              excerpt={post.excerpt}
              image={post.frontmatter.cover}
              slug={post.fields.slug}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

PostGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostGrid);
