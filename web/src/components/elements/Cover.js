import React from 'react'
import AspectContainer from './AspectContainer'
import styled, { css } from 'styled-components'

const Cover = ({
  aspect,
  aspects,
  background,
  maxHeight,
  children,
  className
}) => {
  return (
    <div className={className}>
      <div className="Cover__bg">{background}</div>
      <div className="Cover__content">
        {aspect || aspects ? (
          <AspectContainer
            aspect={aspect}
            aspects={aspects}
            maxHeight={maxHeight}
          >
            {children}
          </AspectContainer>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

export default styled(Cover)(
  ({ theme }) => css`
    position: relative;
    .Cover__bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .Cover__content {
      position: relative;
      z-index: 1;
    }
  `
)
