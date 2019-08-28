import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share'
import LinkResolver from './LinkResolver'

const Social = () => {
  const data = useStaticQuery(query)
  const social = data?.sanityCompanyInfo?.social

  const icons = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    linkedin: LinkedinIcon,
    instagram: null
  }

  const IconProps = {
    iconBgStyle: { fill: 'black' },
    logoFillColor: 'white',
    size: 50,
    round: true
  }

  return (
    <div className="Social">
      {social &&
        Object.keys(social)
          .filter(key => key !== '_type')
          .map(key => {
            const Icon = icons[key]
            const link = social[key]
            return (
              <div className="Social__item" key={`social-${link}`}>
                <LinkResolver data={link}>
                  {Icon ? <Icon {...IconProps} /> : key}
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
