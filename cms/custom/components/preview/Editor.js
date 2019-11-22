import React from "react";
import BaseBlockContent from "@sanity/block-content-to-react";
import QuotePreview from "./QuotePreview";
import Button from "./Button";

const serializers = {
  types: {
    block(props) {
      if (props.node.children.text && props.node.children.text.length === 0)
        return null;
      switch (props.node.style) {
        case "h2":
          return <h2>{props.children}</h2>;

        case "h3":
          return <h3>{props.children}</h3>;

        case "large":
          return <p className="text-large">{props.children}</p>;

        case "small":
          return <small>{props.children}</small>;

        case "span":
          return <span>{props.children}</span>;

        default:
          return <p>{props.children}</p>;
      }
    },
    button(props) {
      console.log(props);
      if (!props.node.link) return null;
      return <Button>{props.node.link.title}</Button>;
    },
    quote(props) {
      if (!props.node.content) return null;
      return <QuotePreview quote={props.node} />;
    }
  }
};

const Editor = ({ blocks }) => {
  return <BaseBlockContent blocks={blocks} serializers={serializers} />;
};

export default Editor;
