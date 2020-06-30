import React from 'react'
import { Grid } from '../elements'

import Card from '../elements/Card'
import { LinkResolver } from '../resolvers'

const CardSection = ({ title, seeAllLink, cardsList = [], ...props }) => {
  return (
    <div className="CardSection">
      {title && <h2>{title}</h2>}
      <Grid columns={{ sm: 1, md: 3 }} gap={true}>
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
      {seeAllLink && (
        <LinkResolver link={seeAllLink}>
          {seeAllLink?.title || seeAllLink?.reference?.title}
        </LinkResolver>
      )}
    </div>
  )
}

export default CardSection
