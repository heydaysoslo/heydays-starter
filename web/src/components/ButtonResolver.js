import React from 'react'
import LinkResolver from './LinkResolver'
import cc from 'classcat'

const ButtonResolver = ({ button, className }) => {
  const title = button?.link?.title || button?.link?.reference?.title
  const url = button?.link?.externalLink?.url || button?.link?.reference
  const openInNewTab = button?.link?.externalLink?.blank
  const variant = button?.type
  return (
    <>
      {title && url && (
        <LinkResolver
          className={cc({
            Button: true,
            'Button--link': true,
            [`Button--${variant}`]: variant,
            [className]: className
          })}
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
