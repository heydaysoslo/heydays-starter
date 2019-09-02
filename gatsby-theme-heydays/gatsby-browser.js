/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Polyfill gatsby-background-image
// https://www.gatsbyjs.org/packages/gatsby-background-image/
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.info(`# IntersectionObserver is polyfilled!`)
  }
}
