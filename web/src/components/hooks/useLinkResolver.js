import { useStaticQuery, graphql } from 'gatsby'
import { resolveRoute } from '../../routes'
import { removeTrailingSlash } from '../../utils/helpers'

const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
    sanitySiteSettings(_id: { eq: "siteSettings" }) {
      frontpage {
        _id
      }
    }
  }
`

function useLinkResolver(page, options) {
  const data = useStaticQuery(query)
  const frontPageId = data?.sanitySiteSettings?.frontpage?._id || null
  const siteUrl = data?.site?.siteMetadata?.siteUrl || '/'

  if (!page) {
    console.warn('Page not provided. Can not resolve link')
    return null
  }

  if (frontPageId === page?._id) {
    return '/'
  }

  let url = resolveRoute(page)

  if (url && options?.canonical) {
    url = `${removeTrailingSlash(siteUrl)}${url}`
  }

  return url
}

export default useLinkResolver
