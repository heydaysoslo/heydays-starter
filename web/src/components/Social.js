import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share'
import { LinkResolver } from './resolvers'

// Temporary instagram icon
const InstagramIcon = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="48.4px"
    height="48.4px"
    viewBox="0 0 48.4 48.4"
  >
    <circle cx="24.2" cy="24.2" r="24.2" />
    <path
      fill="#FFFFFF"
      d="M24.2,12.6c3.8,0,4.2,0,5.7,0.1c1.4,0.1,2.1,0.3,2.6,0.5c0.7,0.3,1.1,0.6,1.6,1.1s0.8,1,1.1,1.6
    c0.2,0.5,0.4,1.2,0.5,2.6c0.1,1.5,0.1,1.9,0.1,5.7s0,4.2-0.1,5.7c-0.1,1.4-0.3,2.1-0.5,2.6c-0.3,0.7-0.6,1.1-1.1,1.6
    c-0.5,0.5-1,0.8-1.6,1.1c-0.5,0.2-1.2,0.4-2.6,0.5c-1.5,0.1-1.9,0.1-5.7,0.1s-4.2,0-5.7-0.1c-1.4-0.1-2.1-0.3-2.6-0.5
    c-0.7-0.3-1.1-0.6-1.6-1.1c-0.5-0.5-0.8-1-1.1-1.6c-0.2-0.5-0.4-1.2-0.5-2.6c-0.1-1.5-0.1-1.9-0.1-5.7s0-4.2,0.1-5.7
    c0.1-1.4,0.3-2.1,0.5-2.6c0.3-0.7,0.6-1.1,1.1-1.6c0.5-0.5,1-0.8,1.6-1.1c0.5-0.2,1.2-0.4,2.6-0.5C20,12.6,20.4,12.6,24.2,12.6
     M24.2,10.1c-3.8,0-4.3,0-5.8,0.1c-1.5,0.1-2.5,0.3-3.4,0.7c-0.9,0.4-1.7,0.8-2.5,1.6c-0.8,0.8-1.3,1.6-1.6,2.5
    c-0.3,0.9-0.6,1.9-0.7,3.4c-0.1,1.5-0.1,2-0.1,5.8s0,4.3,0.1,5.8c0.1,1.5,0.3,2.5,0.7,3.4c0.4,0.9,0.8,1.7,1.6,2.5
    c0.8,0.8,1.6,1.3,2.5,1.6c0.9,0.3,1.9,0.6,3.4,0.7c1.5,0.1,2,0.1,5.8,0.1s4.3,0,5.8-0.1c1.5-0.1,2.5-0.3,3.4-0.7
    c0.9-0.4,1.7-0.8,2.5-1.6c0.8-0.8,1.3-1.6,1.6-2.5c0.3-0.9,0.6-1.9,0.7-3.4c0.1-1.5,0.1-2,0.1-5.8s0-4.3-0.1-5.8
    c-0.1-1.5-0.3-2.5-0.7-3.4c-0.4-0.9-0.8-1.7-1.6-2.5c-0.8-0.8-1.6-1.3-2.5-1.6c-0.9-0.3-1.9-0.6-3.4-0.7
    C28.5,10.1,28.1,10.1,24.2,10.1L24.2,10.1z M24.2,17c-4,0-7.3,3.2-7.3,7.3s3.2,7.3,7.3,7.3s7.3-3.2,7.3-7.3S28.2,17,24.2,17z
     M24.2,28.9c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7s4.7,2.1,4.7,4.7S26.8,28.9,24.2,28.9z M31.8,15c0.9,0,1.7,0.8,1.7,1.7
    s-0.8,1.7-1.7,1.7s-1.7-0.8-1.7-1.7S30.8,15,31.8,15z"
    />
  </svg>
)

const Social = () => {
  const data = useStaticQuery(query)
  const social = data?.sanityCompanyInfo?.social

  const icons = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    linkedin: LinkedinIcon,
    instagram: InstagramIcon
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
        Object.keys(social).map(key => {
          const Icon = icons[key]
          const link = social[key]
          return (
            <div className="Social__item" key={`social-${link}`}>
              <LinkResolver data={link} aria-label={key}>
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
