import React, { useEffect, useState } from 'react'
import { AspectContainer } from 'gatsby-theme-heydays'

import { isProviderAllowed } from '../../heydays-config'

const Oembed = ({ url }) => {
  const [embed, setEmbed] = useState({})
  useEffect(() => {
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
  }, [url])
  return (
    <div className="Oembed">
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

export default Oembed
