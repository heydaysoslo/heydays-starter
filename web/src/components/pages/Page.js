import React from 'react'
import Pagebuilder from '../pagebuilder/Pagebuilder'
import { Container } from 'gatsby-theme-heydays'

const Page = ({ title, content, _rawPagebuilder, ...props }) => {
  return (
    <div className="Page">
      <Container className="Page__container">
        <header className="Page__header">
          <p className="Page__label">Page</p>
          <h1 className="Page__title">{title}</h1>
        </header>
        <div className="Page__content">
          {_rawPagebuilder?.sections && (
            <Pagebuilder sections={_rawPagebuilder.sections} />
          )}
        </div>
      </Container>
    </div>
  )
}

export default Page
