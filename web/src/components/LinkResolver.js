import React from 'react'
import { graphql, Link } from 'gatsby'
import { routes } from '../../heydays-config'

const LinkResolver = ({ data, children, ...props }) => {
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
      to={`${routes[data._type]}${data.slug.current}`}
      className={props.className}
    >
      {children}
    </Link>
  )
}

export default LinkResolver

export const query = graphql`
  fragment Link on SanityNewsOrPage {
    ... on SanityPage {
      slug {
        current
      }
      _type
    }
    ... on SanityNews {
      slug {
        current
      }
      _type
    }
  }
`
