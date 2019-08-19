import React from 'react'
import { graphql } from 'gatsby'

import CardSection from './CardSection'
import TextSection from './TextSection'
import FullImageSection from './FullImageSection'
import Section from './Section'

const sectionTypes = {
  section: Section,
  cardSection: CardSection,
  textSection: TextSection,
  imageSection: FullImageSection
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
          <p key={section._key} style={{ background: 'yellow' }}>
            Component {section._type} not found
          </p>
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
        body {
          sanityChildren {
            _key
            _type
            marks
            text
          }
          _key
          _type
          list
          style
        }
      }
    }
  }
`
