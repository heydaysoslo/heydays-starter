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

import useLinkResolver from './hooks/useLinkResolver'

const Share = ({ page }) => {
  const url = useLinkResolver(page, { canonical: true })
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
