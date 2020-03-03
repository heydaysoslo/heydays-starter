import React, { useState, useEffect } from 'react'

import { isProviderAllowed } from '../../heydays-config'

import AspectContainer from './elements/AspectContainer'
import styled from 'styled-components'
import { useFetch } from './hooks'

const Oembed = ({ url, className }) => {
  const [embed, setEmbed] = useState({})
  useEffect(() => {
    if (url) {
      fetch('/.netlify/functions/oembed', {
        method: 'POST',
        body: JSON.stringify({ url })
      })
        .then(res => res.json())
        .then(res => {
          const provider = res?.result?.provider_name
          if (provider && isProviderAllowed(provider.toLowerCase())) {
            setEmbed(res)
          } else {
            console.info(`${provider} embed is not allowed`)
          }
        })
    }
  }, [url])
  return (
    <div className={className}>
      {embed?.result?.html && embed?.result?.type === 'video' && (
        <AspectContainer
          aspect={parseInt(embed.result.height) / parseInt(embed.result.width)}
        >
          <div dangerouslySetInnerHTML={{ __html: embed.result.html }}></div>
        </AspectContainer>
      )}
      {embed?.result?.html && embed?.result?.type === 'rich' && (
        <div
          style={{ height: embed.result.height, width: embed.result.width }}
          dangerouslySetInnerHTML={{ __html: embed.result.html }}
        ></div>
      )}
    </div>
  )
}

export default styled(Oembed)`
  position: relative;

  iframe[height] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`
