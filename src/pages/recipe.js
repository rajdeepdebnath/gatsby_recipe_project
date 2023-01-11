import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import {recipeImage} from '../styles/recipe.module.css'

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        recipeName
        recipeDescription {
          raw
        }
        recipeImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        id
      }
    }
  }
`

const Recipe = ({data}) => {
  console.log(data);
  let nodes = data?.allContentfulRecipe?.nodes;
  let dataNodes = nodes ?? [];
  console.log();
  return (
    <Layout>
      {!dataNodes && 'Recipe'}
      {dataNodes && dataNodes.map(node => {
        return (
          <div key={node.id}>
            {node.recipeName}
            <GatsbyImage image={node.recipeImage.gatsbyImageData} alt={node.recipeName} 
            className={recipeImage}/>
          </div>
        );
      })}
    </Layout>
  )
}

export default Recipe

