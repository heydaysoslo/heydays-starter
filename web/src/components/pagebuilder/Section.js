import React from 'react'
import Editor from '../editor/'
import ButtonResolver from '../resolvers/ButtonResolver'
import { P, H3, Button } from '../elements'
import styled, { css } from 'styled-components'
import { spacing } from '../../styles/utilities'

const Section = ({ label, title, content, button, className }) => {
  return (
    <div className={className}>
      {label && (
        <P modifiers="small" className="label">
          {label}
        </P>
      )}
      {title && <H3 className="title">{title}</H3>}
      {content && <Editor className="content" blocks={content} />}
      {button && (
        <Button
          className="button"
          as={ButtonResolver}
          modifiers={button?.type && button?.type}
          button={button}
        />
      )}
    </div>
  )
}

export default styled(Section)(
  ({ theme }) => css`
    text-align: center;
    ${spacing.section('my')}
    color: ${theme?.colors?.text};

    .button {
      ${spacing.md('mt')}
    }
  `
)
