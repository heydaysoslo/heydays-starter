import React, { FunctionComponent } from "react";
import { oc } from "ts-optchain";

import Grid from "../Grid";
import Card from "../Card";

interface ICardList {
  _key: string;
  cardOverride: {
    title?: string;
    image?: any;
    content?: any;
    link?: any;
  };
  content: {
    title?: string;
    mainImage?: any;
    excerpt?: any;
  };
}

interface IProps {
  cardsList: ICardList[];
}

const CardSection: FunctionComponent<IProps> = ({ cardsList = [] }) => {
  return (
    <div className="CardSection">
      <Grid columns={{ sm: 1, md: 3 }} margin="y">
        {cardsList.map(card => {
          return (
            <Card
              key={card._key}
              title={
                oc(card).cardOverride.title(undefined) ||
                oc(card).content.title(undefined)
              }
              image={
                oc(card).cardOverride.image(undefined) ||
                oc(card).content.mainImage(undefined)
              }
              excerpt={
                oc(card).cardOverride.content(undefined) ||
                oc(card).content.excerpt(undefined)
              }
              link={
                oc(card).cardOverride.link(undefined) ||
                oc(card).content(undefined)
              }
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default CardSection;
