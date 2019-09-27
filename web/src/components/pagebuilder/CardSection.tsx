import * as React from 'react'
import Grid from '../Grid'

import Card from '../Card'

interface Props {
  cardsList: Array<CardInterface>,
}

export interface CardInterface {
  _key: string,
  title: string,
  image: string,
  excerpt: string,
  link: string,
  content: string,
  cardOverride: string
}

const CardSection: React.SFC<Props> = ({ cardsList = [], ...props }) => {
  return (
    <div className="CardSection">
      <Grid columns={{ sm: 1, md: 3 }} margin="y">
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
    </div>
  )
}

export default CardSection
