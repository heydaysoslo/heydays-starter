const createPageDependency = require('gatsby/dist/redux/actions/add-page-dependency')
const optionalChaining = require('@babel/plugin-proposal-optional-chaining')

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

  console.log('siteSettings', siteSettings)

  pages
    .filter(
      page =>
        page.node.slug.current !== 'placeholder' &&
        page.node.slug.current !== '/' &&
        page.node.id !== siteSettings.frontpage.id
    )
    .forEach(page => {
      const { id, slug } = page.node

      const path = `/${slug.current}`

      reporter.info(`Creating page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/Page.js'),
        context: { id }
      })

      createPageDependency({ path, nodeId: id })
    })
}

// async function createNewsPages(graphql, actions, reporter) {
//   const { createPage, createPageDependency } = actions

//   const result = await graphql(`
//     {
//       allSanityNews(filter: { slug: { current: { ne: null } } }) {
//         edges {
//           node {
//             id
//             slug {
//               _type
//               current
//               _key
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) throw result.errors

//   const newsPages = (result.data.allSanityNews || {}).edges || []

//   newsPages
//     .filter(page => page.node.slug.current !== 'placeholder')
//     .forEach(page => {
//       const { id, slug } = page.node
//       const path = `/news/${slug.current}`

//       reporter.info(`Creating news page: ${path}`)

//       createPage({
//         path,
//         component: require.resolve('./src/templates/NewsPage.js'),
//         context: { id }
//       })

//       createPageDependency({ path, nodeId: id })
//     })
// }

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
  // await createNewsPages(graphql, actions, reporter)
}
