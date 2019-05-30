import React from "react"
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout/layout";
import PreviewCompatibleImage from '../components/image/previewImage';

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts);
  return (
    <Layout>
      {posts.map(({ node: post }) =>
        <div>
          {post.frontmatter.cover ? (
            <PreviewCompatibleImage
              imageInfo={{
                image: post.frontmatter.cover,
                alt: `cover image for post ${post.title}`,
              }}
            />
          ) : null}
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
            cover
          }
        }
      }
    }
  }
`;

