import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { routes } from '../../heydays-config'

const LinkResolver = ({ data, children, ...props }) => {
  const { sanitySiteSettings } = useStaticQuery(StaticQuery)
  const frontpageId = sanitySiteSettings?.frontpage?.id

  // Return children if data is missing
  if (!data) return children

  // If external link
  if (typeof data === 'string') {
    return (
      <a {...props} href={data} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  // Only return children if required props are missing
  if (!data?._type || !data?.slug?.current) {
    return children
  }

  return (
    <Link
      to={
        frontpageId === data.id
          ? '/'
          : `${routes[data._type]}${data.slug.current}`
      }
      className={props.className}
      onClick={props.onClick}
    >
      {children}
    </Link>
  )
}

export default LinkResolver

export const query = graphql`
  fragment Link on SanityNewsOrPage {
    ... on SanityPage {
      id
      _type
      title
      slug {
        current
      }
    }
    ... on SanityNews {
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
        id
      }
    }
  }
`
