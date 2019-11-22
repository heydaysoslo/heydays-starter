import React from "react";
import styled from "styled-components";
import { style } from "../../../heydays-config";

const Wrapper = styled.div`
  border: none;
  padding: ${style.spacing};

  blockquote {
    margin: 0;
    font-size: ${style.font.display};

    &:before {
      content: '"';
    }
  }

  cite {
    &:before {
      content: "– ";
    }
  }
`;

const Quote = ({ value }) => {
  return (
    <Wrapper>
      <blockquote>{value.title}</blockquote>
      <cite>{value.subtitle}</cite>
    </Wrapper>
  );
};

export default Quote;
