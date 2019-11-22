import React from "react";
import styled from "styled-components";
import { style } from "../../../heydays-config";

const Wrapper = styled.div`
  background: black;
  text-align: center;
  color: white;

  p {
    margin: 0;
    font-size: ${style.font.small};
  }
`;

const TitleBar = ({ title }) => {
  return (
    <Wrapper>
      <p>{title && title}</p>
    </Wrapper>
  );
};

export default TitleBar;
