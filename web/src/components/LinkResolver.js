import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { routes } from '../../heydays-config'

const LinkResolver = ({ data, children, openInNewTab, ...props }) => {
  const { sanitySiteSettings } = useStaticQuery(StaticQuery)
  const frontpageId = sanitySiteSettings?.frontpage?._id

  // Return children if data is missing
  if (!data) return children

  // If external link
  if (typeof data === 'string') {
    const targetProps =
      openInNewTab !== false
        ? {
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        : {}
    return (
      <a {...props} href={data} {...targetProps}>
        {children}
      </a>
    )
  }

  // Only return children if required props are missing
  if (!data?._type || !data?.slug?.current) {
    return children
  }

  const link =
    frontpageId === data._id ? '/' : `${routes[data._type]}${data.slug.current}`

  return (
    <Link to={link} className={props.className} onClick={props.onClick}>
      {children}
    </Link>
  )
}

export default LinkResolver

export const query = graphql`
  fragment Link on SanityArticleOrPage {
    ... on SanityPage {
      _id
      id
      _type
      title
      slug {
        current
      }
    }
    ... on SanityArticle {
      _id
      id
      _type
      title
      slug {
        current
      }
    }
  }
`

export const StaticQuery = graphql`
  {
    sanitySiteSettings(_id: { eq: "siteSettings" }) {
      frontpage {
        _id
        id
      }
    }
  }
`
