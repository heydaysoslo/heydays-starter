import React from 'react'
import { graphql } from 'gatsby'
import { Grid, GridItem } from 'gatsby-theme-heydays'

import Card from '../Card'

const CardSection = ({ cardsList = [], ...props }) => {
  console.log(props, cardsList)
  return (
    <div className="CardSection">
      <Grid>
        {cardsList.map(card => (
          <GridItem key={card?._key}>
            <Card content={card} />
          </GridItem>
        ))}
      </Grid>
    </div>
  )
}

export default CardSection

export const query = graphql`
  fragment CardSection on SanityCardSection {
    _key
    _type
    cardsList {
      _key
      content {
        ... on SanityNews {
          id
          ...Link
          mainImage {
            crop {
              top
              right
              left
              bottom
              _type
              _key
            }
            asset {
              fluid(maxWidth: 1400) {
                ...GatsbySanityImageFluid
              }
            }
          }
          title
          _rawBody(resolveReferences: { maxDepth: 10 })
        }
        ... on SanityPage {
          id
          ...Link
          title
          mainImage {
            hotspot {
              _key
              _type
              height
              width
              x
              y
            }
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      cardOverride {
        content {
          sanityChildren {
            _key
            _type
            marks
            text
          }
          _key
          _type
          list
          style
        }
        title
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
          hotspot {
            _key
            _type
            height
            width
            x
            y
          }
        }
        link
      }
    }
    title
  }
`
