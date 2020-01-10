const createPageDependency = require('gatsby/dist/redux/actions/add-page-dependency')
// const isPast = require('date-fns/is_past')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Add optional chaining
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-proposal-optional-chaining')
  })
}

async function createPages(graphql, actions, reporter) {
  const { createPage } = actions

  createPage({
    path: '/_preview',
    matchPath: '/_preview/:id',
    component: require.resolve('./src/templates/Preview.js')
  })

  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            title
            slug {
              _type
              current
              _key
            }
          }
        }
      }
      sanitySiteSettings(_id: { eq: "siteSettings" }) {
        frontpage {
          id
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pages = (result.data.allSanityPage || {}).edges || []
  const siteSettings = result.data.sanitySiteSettings || {}

  pages.forEach(page => {
    const { id, slug } = page.node

    const path = `/${slug.current}`

    reporter.info(`Creating page: ${path}`)

    createPage({
      path: siteSettings.frontpage.id === id ? '/' : path,
      component: require.resolve('./src/templates/Page.js'),
      context: { id }
    })

    createPageDependency({ path, nodeId: id })
  })
}

async function createArticles(graphql, actions, reporter) {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityArticle(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            #publishDate
            slug {
              _type
              current
              _key
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const articles = (result.data.allSanityArticle || {}).edges || []

  articles
    // .filter(article => isPast(article.node.publishDate))
    .forEach(article => {
      const { id, slug } = article.node
      const path = `/news/${slug.current}`

      reporter.info(`Creating article: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/Article.js'),
        context: { id }
      })

      createPageDependency({ path, nodeId: id })
    })
}

// Workaround for newer react
// https://github.com/gatsbyjs/gatsby/issues/11934
// exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
//   const config = getConfig()
//   if (stage.startsWith('develop') && config.resolve) {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       'react-dom': '@hot-loader/react-dom'
//     }
//   }
// }

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createPages(graphql, actions, reporter)
  await createArticles(graphql, actions, reporter)
}
