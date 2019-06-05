import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/Layout";
import Hero from "../components/hero";
import PostGrid from "../components/blog/postGrid";

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <div>
        <Hero />
      </div>
      <PostGrid posts={posts} />
    </Layout>
  );
}

export const pageQuery = graphql`
query IndexQuery {
        allMarkdownRemark(
          filter: {frontmatter: {templateKey: {eq: "blog-post" } } },
    sort: {order: DESC, fields: [frontmatter___date] }
  ) {
        edges {
      node {
        excerpt(pruneLength: 100)
      id
        fields {
        slug
      }
      frontmatter {
        path
          title
      date(formatString: "MMMM DD, YYYY")
          cover {
        childImageSharp {
      fluid(maxWidth: 300, maxHeight: 150) {
        ...GatsbyImageSharpFluid
      }
      }
    }
  }
}
}
}
}
`;

