import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

export const ContactPageTemplate = ({ title, content }) => {
  const classes = useStyles();
  return (
    <Layout>
        <Container component="main" className={classes.main} maxWidth="md">
          <Typography variant="h2" component="h2" align="center">
            {title}
          </Typography>
          <Typography variant="body1" component="div"
            dangerouslySetInnerHTML={{ __html: content }} />

        </Container>
    </Layout>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <ContactPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
