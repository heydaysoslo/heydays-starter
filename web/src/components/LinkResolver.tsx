import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { routes } from '../../heydays-config'

interface Props {
  data: {
    _type: string,
    id: string,
    slug: {
      current: string
    }
  },
  children?: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>,
  openInNewTab?: boolean,
  className?: string,
  onClick: (ev) => void
}

const LinkResolver: React.SFC<Props> = ({ data, children, openInNewTab, ...props }) => {
  const { sanitySiteSettings } = useStaticQuery(StaticQuery)
  const frontpageId = sanitySiteSettings?.frontpage?.id

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
  fragment Link on SanityArticleOrPage {
    ... on SanityPage {
      id
      _type
      title
      slug {
        current
      }
    }
    ... on SanityArticle {
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
