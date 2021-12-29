import * as React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components"
import pickRandom from 'pick-random';

const Container = styled.main`
  display: flex;
  justify-content:center;
  align-items: center; 
  flex-direction: column;
`

const IndexPage = () => {
  const {allFile } = useStaticQuery(graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          extension
          dir
          modifiedTime
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`)
  console.log(allFile)
  const file = pickRandom(allFile.edges)
  console.log(file)
  const image = getImage(file[0].node.childImageSharp);
  console.log(image)
  return (
    <Container>
    <h1> Love you Grace! </h1>
      <GatsbyImage
        alt="Picture for Gracey"
        image={image}
      />
      <p>It's been a great 2021. Hoping for many more :)</p>
      <p>Love, Abby</p>
    </Container>
  )
  }

export default IndexPage
