import React from 'react'

import Article from '../components/pages/Article'
import Page from '../components/pages/Page'
import ContactPage from '../components/pages/ContactPage'
import NewsPage from '../components/pages/NewsPage'

const templates = {
  article: Article,
  frontpage: Page,
  contact: ContactPage,
  news: NewsPage,
  default: Page
}

export default function TemplateResolver({ data }) {
  let Component = null

  // Check if we have a template
  if (data.template && templates[data.template]) {
    Component = templates[data.template]
  }

  // If no template name is set, resolve to type
  if (!Component) {
    if (data._type && templates[data._type]) {
      Component = templates[data._type]
    }
  }

  // If we still don't have a component, resolve to default
  if (!Component) {
    Component = templates.default
  }

  return <Component {...data} />
}
