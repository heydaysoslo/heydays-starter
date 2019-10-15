import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { oc } from "ts-optchain";

import Layout from "../components/Layout";
import Page from "../components/pages/Page";
import Typescript from "../components/Typescript";

const FrontPage: FunctionComponent<any> = props => {
  const { data } = props;
  const page = oc(data).sanitySiteSettings.frontpage(undefined);

  return (
    <Layout {...page}>
      <Typescript name="Mike" dir="left" />
      <Page {...page} />
    </Layout>
  );
};

export default FrontPage;

export const query = graphql`
  {
    sanitySiteSettings(id: { eq: "0f217bb5-f7f6-5420-b7c6-58db2c12b8c7" }) {
      frontpage {
        ...Page
      }
    }
  }
`;
