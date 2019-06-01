const path = require("path");
// Used onCreateNode for image creation on gatsby-remar
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date
              path
              title
              templateKey
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

      const template = path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`)

      const id = node.id

      createPage({
        path: node.frontmatter.path || node.fields.slug,
        component: template,
        context: { id }, // additional data can be passed via context
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    console.log(value)
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
};
