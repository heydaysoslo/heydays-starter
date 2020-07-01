import React from 'react'

import { isProviderAllowed } from '../../heydays-config'

import AspectContainer from './elements/AspectContainer'
import styled from 'styled-components'
import { useFetch } from './hooks'

const Oembed = ({ url, className }) => {
  const { response: embed, isLoading, error } = useFetch('/api/oembed', {
    method: 'POST',
    body: JSON.stringify({ url })
  })
  console.log('Oembed -> embed', embed)
  if (
    embed?.result?.provider_name &&
    !isProviderAllowed(embed?.result?.provider_name)
  ) {
    console.info(
      `Provider ${embed?.result?.provider_name} is not allowed. Check isProviderAllowed()`
    )
    return null
  }
  if (isLoading || error) return null
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
