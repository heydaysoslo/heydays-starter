// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import companyInfo from './documents/companyInfo'
import menu from './documents/menu'
import page from './documents/page'
import person from './documents/person'
import personOrder from './documents/personOrder'
import news from './documents/news'
import newsOrder from './documents/newsOrder'
import siteSettings from './documents/siteSettings'

// Object types
import link from './objects/link'
import seo from './objects/seo'
import mainImage from './objects/mainImage'
import blockContent from './objects/blockContent'
import blockContentMinimal from './objects/blockContentMinimal'
import social from './objects/social'
import office from './objects/office'
import content from './objects/content'
import contentConditional from './objects/contentConditional'
import videoEmbed from './objects/videoEmbed'
import pagebuilder from './objects/pagebuilder'
import card from './objects/card'
import cardOverride from './objects/cardOverride'
import cardSection from './objects/cardSection'
import textSection from './objects/textSection'
import figure from './objects/figure'

// const personOrder = createOrderDoc('person')
// const newsOrder = createOrderDoc('news')

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'schema',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    link,
    seo,
    mainImage,
    blockContent,
    blockContentMinimal,
    social,
    office,
    content,
    contentConditional,
    videoEmbed,
    pagebuilder,
    card,
    cardOverride,
    cardSection,
    textSection,
    figure,

    // The following are document types which will appear
    // in the studio.
    companyInfo,
    menu,
    siteSettings,
    page,
    person,
    personOrder,
    news,
    newsOrder
  ])
})
