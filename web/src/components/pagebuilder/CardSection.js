import React from 'react'
import { graphql } from 'gatsby'
import { Grid, GridItem } from 'gatsby-theme-heydays'

import Card from '../Card'

const CardSection = ({ cardsList = [], ...props }) => {
  return (
    <div className="CardSection">
      <Grid>
        {cardsList.map(card => {
          const { content, cardOverride } = card
          return (
            <GridItem key={card?._key}>
              <Card
                title={cardOverride?.title || content?.title}
                image={cardOverride?.image || content?.mainImage}
                excerpt={cardOverride?.content || content?.excerpt}
                link={cardOverride?.link || content}
              />
            </GridItem>
          )
        })}
      </Grid>
    </div>
  )
}

export default CardSection
