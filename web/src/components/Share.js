import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon
} from 'react-share'
import { graphql, useStaticQuery } from 'gatsby'

import { getUrl } from '../../heydays-config'

const Share = ({ type, slug }) => {
  const data = useStaticQuery(query)
  const { sanitySiteSettings } = data
  const url = `${sanitySiteSettings.siteUrl}${getUrl(type, slug)}`
  const IconProps = {
    iconBgStyle: { fill: 'black' },
    logoFillColor: 'white',
    size: 50,
    round: true
  }
  return (
    <div className="Share">
      <FacebookShareButton url={url}>
        <FacebookIcon {...IconProps} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon {...IconProps} />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon {...IconProps} />
      </LinkedinShareButton>
      <EmailShareButton url={url}>
        <EmailIcon {...IconProps} />
      </EmailShareButton>
    </div>
  )
}

export default Share

export const query = graphql`
  {
    sanitySiteSettings {
      siteUrl
    }
  }
`
