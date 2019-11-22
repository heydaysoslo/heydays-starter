import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
  padding: 10px;
  background: black;
  color: white;
  border-radius: 6px;
  margin-bottom: 10px;
`;

const Button = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Button;
