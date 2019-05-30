const path = require("path");
// Used onCreateNode for image creation on gatsby-remar
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date
              path
              title
              cover
            }
            fields {
              coverImg {
                id
                childImageSharp {
                  fluid(maxWidth: 590, maxHeight: 265) {
                    src
                  }
                }              
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  const { frontmatter } = node;
  if (frontmatter) {
    const { cover } = frontmatter
    if (cover) {
      const coverPath = path.relative(
        path.dirname(node.fileAbsolutePath),
        path.join(__dirname, '/static/', cover)
      )
      createNodeField({
        node,
        name: 'coverImg',
        value: coverPath
      });
    }
  }
};
