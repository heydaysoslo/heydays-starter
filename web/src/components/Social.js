import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { LinkResolver } from './resolvers'
import { Icon } from './elements'

const Social = () => {
  const data = useStaticQuery(query)
  const social = data?.sanityCompanyInfo?.social

  return (
    <div className="Social">
      {social &&
        Object.keys(social).map(key => {
          const link = social[key]
          return (
            <div className="Social__item" key={`social-${link}`}>
              <LinkResolver link={link} aria-label={key}>
                <Icon name={key} />
              </LinkResolver>
            </div>
          )
        })}
    </div>
  )
}

export default Social

export const query = graphql`
  {
    sanityCompanyInfo(_id: { eq: "companyInfo" }) {
      social {
        facebook
        twitter
        instagram
        linkedin
      }
    }
  }
`
