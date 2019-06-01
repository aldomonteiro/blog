import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

export default function Template ({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        {frontmatter.cover &&
          <Img
            alt={frontmatter.title}
            fixed={frontmatter.cover.childImageSharp.resize}
            height={frontmatter.cover.childImageSharp.resize.height}
            width={frontmatter.cover.childImageSharp.resize.width}
          />
        }
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
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
            resize(width:400) {
              src
              height
              width
            }              
          }
        }
      }
    }
  }
`