import React from 'react'
import { graphql } from 'gatsby'

import CardSection from './CardSection'

const sectionTypes = {
  cardSection: CardSection
}

const PageBuilder = ({ sections }) => {
  return (
    <div className="PageBuilder">
      {sections.map((section, index) => {
        const Component = sectionTypes[section._type] || null
        return Component ? (
          <Component
            key={section._key}
            {...section}
            prevComp={sections[index - 1] ? sections[index - 1] : null}
          />
        ) : (
          <p key={section._key}>Component {section._type} not found</p>
        )
      })}
    </div>
  )
}

export default PageBuilder

export const query = graphql`
  fragment PageBuilder on SanityPagebuilder {
    sections {
      ... on SanityCardSection {
        ...CardSection
      }
      ... on SanityTextSection {
        _key
        _type
      }
    }
  }
`
