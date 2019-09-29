import * as React from 'react'
import { HtmlElementWithAttributes } from '../interfaces'

const Tag: React.FC<HtmlElementWithAttributes> = ({
  element = 'div',
  children,
  ...props
}) => {
  const Wrapper = element as 'div'

  return <Wrapper {...props}>{children}</Wrapper>
}

export default Tag
