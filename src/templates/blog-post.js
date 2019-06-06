import React from 'react';
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

export default function BlogPost ({ data }) {
  const classes = useStyles();
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        {/* <CssBaseline /> */}
        <Container component="main" className={classes.main} maxWidth="md">
          <Typography variant="h2" component="h2" align="center">
            {frontmatter.title}
          </Typography>

          {frontmatter.cover &&
            <Img
              alt={frontmatter.title}
              fluid={frontmatter.cover.childImageSharp.fluid}
            />
          }

          <Typography variant="body1" component="div"
            dangerouslySetInnerHTML={{ __html: html }} />

        </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

/*export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        cover {
          childImageSharp {
            sizes(maxWidth: 600, maxHeight: 400 ) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`*/
