import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import cc from 'classcat'

import LinkResolver from '../LinkResolver'
import Quote from './Quote'
import Figure from './Figure'
import Oembed from '../Oembed'

const serializers = {
  types: {
    block(props) {
      if (props.node.children.text && props.node.children.text.length === 0)
        return null
      switch (props.node.style) {
        case 'h2':
          return <h2>{props.children}</h2>

        case 'h3':
          return <h3>{props.children}</h3>

        case 'large':
          return <p className="text-large">{props.children}</p>

        case 'small':
          return <small>{props.children}</small>

        case 'span':
          return <span>{props.children}</span>

        default:
          return <p>{props.children}</p>
      }
    },
    button(props) {
      if (!props.node.link) return null
      return (
        <p>
          <LinkResolver
            data={props.node.link.link}
            className={cc({
              Button: true,
              [`Button--${props.node.type}`]: props.node.type
            })}
          >
            {props.node.link.title}
          </LinkResolver>
        </p>
      )
    },
    quote(props) {
      if (!props.node.content) return null
      return <Quote quote={props.node} />
    },
    figure(props) {
      return <Figure node={props.node} />
    },
    videoEmbed(props) {
      if (!props.node.url) return null
      return <p>I'm video</p>
    },
    oembed(props) {
      return <Oembed url={props.node.url} />
    }
  },
  marks: {
    linkExternal(props) {
      if (props.mark && props.mark.blank && props.mark.href) {
        return (
          <a href={props.mark.href} target="_blank" rel="noopener noreferrer">
            {props.children}
          </a>
        )
      } else {
        return <a href={props.mark.href}>{props.children}</a>
      }
    }
  }
}

const Editor = ({ blocks }) => {
  return (
    <div className="Editor">
      <BaseBlockContent blocks={blocks} serializers={serializers} />
    </div>
  )
}

export default Editor
