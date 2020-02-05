import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { bp } from '../../styles/utilities'

const AspectContainer = ({ background, className, children }) => {
  return (
    <div className={className}>
      {background && <div className="background">{background}</div>}
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default styled(AspectContainer)(
  props => css`
    position: relative;
    width: 100%;
    display: block;
    height: 0;
    overflow: hidden;
    ${props.aspect &&
      typeof props.aspect === 'number' &&
      css`
        padding-top: ${props.aspect * 100}%;
      `}
    ${props.aspect &&
      typeof props.aspect === 'object' &&
      Object.keys(props.aspect).map(
        key => bp.above[key]`
          padding-top: ${props.theme.aspect[props.aspect[key]]}%;
        `
      )}

    .container {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .content {
      height: 100%;
    }
  `
)
