import React from 'react'
import LinkResolver from './LinkResolver'

const ButtonResolver = ({ button, className }) => {
  const title = button?.link?.title || button?.link?.reference?.title
  const url = button?.link?.externalLink?.url || button?.link?.reference
  const openInNewTab = button?.link?.externalLink?.blank
  return (
    <>
      {title && url && (
        <LinkResolver
          className={className}
          data={url}
          openInNewTab={openInNewTab}
        >
          {title}
        </LinkResolver>
      )}
    </>
  )
}

export default ButtonResolver