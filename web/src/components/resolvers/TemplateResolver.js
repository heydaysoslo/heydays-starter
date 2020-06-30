import React from 'react'

import Article from '../pages/Article'
import Page from '../pages/Page'
import ContactPage from '../pages/ContactPage'
import NewsPage from '../pages/NewsPage'

const templates = {
  article: Article,
  frontpage: Page,
  contact: ContactPage,
  news: NewsPage,
  default: Page
}

export default function TemplateResolver({ page }) {
  let Component = null

  // Check if we have a template
  if (page.template && templates[page.template]) {
    Component = templates[page.template]
  }

  // If no template name is set, resolve to type
  if (!Component) {
    if (page._type && templates[page._type]) {
      Component = templates[page._type]
    }
  }

  // If we still don't have a component, resolve to default
  if (!Component) {
    Component = templates.default
  }

  return <Component {...page} />
}
