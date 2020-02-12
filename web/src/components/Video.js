import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import ReactPlayer from 'react-player'

const Video = ({ className, url }) => {
  const [aspect, setAspect] = useState(null)
  return (
    <AspectWrapper aspect={aspect}>
      <StyledPlayer
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing
        onReady={event => {
          console.log(event.getInternalPlayer())
          const { element } = event.getInternalPlayer()
          const width = element?.getAttribute('width')
          const height = element?.getAttribute('height')
          setAspect((height / width) * 100)
          console.log(element?.getAttribute('width'), element)
        }}
      />
    </AspectWrapper>
  )
}

const AspectWrapper = styled.div(
  ({ theme, aspect }) => css`
    position: relative;
    padding-top: ${aspect}%;
  `
)

const StyledPlayer = styled(ReactPlayer)(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `
)

export default Video
