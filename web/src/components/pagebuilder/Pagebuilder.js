import React from 'react'
import loadable from '@loadable/component'

import CardSection from './CardSection'
import TextSection from './TextSection'
import FullImageSection from './FullImageSection'
import Section from './Section'
import TextImageSplit from './TextImageSplit'
const CarouselSection = loadable(() => import('./CarouselSection'))

const sectionTypes = {
  section: Section,
  cardSection: CardSection,
  textSection: TextSection,
  imageSection: FullImageSection,
  textImageSplit: TextImageSplit,
  carousel: CarouselSection
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
