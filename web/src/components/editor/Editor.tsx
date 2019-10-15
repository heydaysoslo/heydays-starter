import React from "react"
import BaseBlockContent from "@sanity/block-content-to-react"
import cc from "classcat"

import LinkResolver from "../LinkResolver"
import Quote from "./Quote"
import Figure from "./Figure"
import Oembed from "../Oembed"
import Accordion from "../Accordion"

export const serializers = {
  types: {
    block(props) {
      if (props.node.children.text && props.node.children.text.length === 0) {
        return null
      }
      switch (props.node.style) {
        case "h2":
          return <h2>{props.children}</h2>

        case "h3":
          return <h3>{props.children}</h3>

        case "large":
          return <p className="text-large">{props.children}</p>

        case "small":
          return <small>{props.children}</small>

        case "span":
          return <span>{props.children}</span>

        default:
          return <p>{props.children}</p>
      }
    },
    button(props) {
      if (!props.node.link) { return null }
      return (
        <p>
          <LinkResolver
            data={props.node.link.link}
            className={cc({
              Button: true,
              [`Button--${props.node.type}`]: props.node.type
            })}
          >
            {props.node.link.title} hello
          </LinkResolver>
        </p>
      )
    },
    quote(props) {
      if (!props.node.content) { return null }
      return <Quote quote={props.node} />
    },
    figure(props) {
      return <Figure node={props.node} />
    },
    oembed(props) {
      return <Oembed url={props.node.url} />
    },
    accordion(props) {
      return <Accordion items={props.node.items} exclusive={true} defaultActive={2} />
    }
  },
  marks: {
    link(props) {
      const link = props?.mark?.externalLink?.url || props?.mark?.reference
      if (!link) { return props.children }
      return (
        <LinkResolver
          openInNewTab={props?.mark?.externalLink?.blank}
          data={link}
        >
          {props.children ||
            props?.mark?.title ||
            props?.mark?.reference?.title}
        </LinkResolver>
      )
    }
  }
}

const Editor: React.FC<IProps> = ({ blocks, className }) => {
  return (
    <div
      className={cc({
        Editor: true,
        [className]: className
      })}
    >
      <BaseBlockContent
        className="Editor__blocks"
        blocks={blocks}
        serializers={serializers}
      />
    </div>
  )
}

export default Editor

interface IProps {
  blocks: any;
  className?: string | undefined;
}
