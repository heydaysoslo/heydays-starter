import React from 'react'
import { Grid } from '../elements'

import Card from '../elements/Card'
import BlockGrid from '../elements/BlockGrid'

const CardSection = ({ cardsList = [], ...props }) => {
  return (
    <>
      <Grid columns={{ sm: 1, md: 3 }} gap="my">
        {cardsList.map(card => {
          const { content, cardOverride } = card
          return (
            <Card
              key={card?._key}
              title={cardOverride?.title || content?.title}
              image={cardOverride?.image || content?.mainImage}
              excerpt={cardOverride?.content || content?.excerpt}
              link={cardOverride?.link || content}
            />
          )
        })}
      </Grid>
      <h1>BLOCK GRID</h1>
      <BlockGrid columns={{ sm: 1, md: 3 }} gap="20px">
        {cardsList.map(card => {
          const { content, cardOverride } = card
          return (
            <Card
              key={card?._key}
              title={cardOverride?.title || content?.title}
              image={cardOverride?.image || content?.mainImage}
              excerpt={cardOverride?.content || content?.excerpt}
              link={cardOverride?.link || content}
            />
          )
        })}
      </BlockGrid>
    </>
  )
}

export default CardSection
