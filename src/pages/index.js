import React from "react"
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image'
import Layout from "../components/layout/layout";

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      {posts.map(({ node: post }) =>
        <div>
          <Img
            alt={post.frontmatter.title}
            fixed={post.frontmatter.cover.childImageSharp.resize}
            height={post.frontmatter.cover.childImageSharp.resize.height}
            width={post.frontmatter.cover.childImageSharp.resize.width}
          />
          <p><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></p>
          <p>{post.excerpt}</p>
        </div>
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            cover {
              childImageSharp {
                resize(width:200) {
                  src
                  height
                  width
                }              
              }
            }
          }
        }
      }
    }
  }
`;

