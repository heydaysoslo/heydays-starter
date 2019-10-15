import React, { FunctionComponent } from "react";

import { SanityImageInterface } from "../interfaces/index";

interface IProps {
  title: string;
  image: SanityImageInterface;
  excerpt: any;
  link: any;
}

import AspectContainer from "./AspectContainer";
import LinkResolver from "./LinkResolver";
import SanityImage from "./editor/SanityImage";
import Editor from "./editor/Editor";
import InView from "./InView";

const Card: FunctionComponent<IProps> = ({ title, image, excerpt, link }) => (
  <InView className="Card" activeClassName="Card--is-visible">
    <LinkResolver data={link}>
      <div className="Card__media">
        {image ? (
          <SanityImage node={image} aspectRatio="portrait" />
        ) : (
          <AspectContainer
            aspect={{
              sm: "portrait",
              md: "portrait",
              lg: "portrait",
              xl: "portrait"
            }}
          />
        )}
      </div>
      {title && <h3 className="Card__title">{title}</h3>}
      {excerpt && (
        <div className="Card__excerpt">
          <Editor blocks={excerpt} />
        </div>
      )}
    </LinkResolver>
  </InView>
);

export default Card;
