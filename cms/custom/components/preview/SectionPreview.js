import React from "react";
import styled from "styled-components";
import TitleBar from "./TitleBar";
import Editor from "./Editor";

const Wrapper = styled.div`
  text-align: center;
  border: 1px solid black;
`;

const SectionPreview = ({ value }) => {
  const { subtitle, title, content, button } = value;
  return (
    <>
      <Wrapper>
        {title && <h3>{title}</h3>}
        <Editor blocks={content} />
        <Editor blocks={button} />
      </Wrapper>
      <TitleBar title={subtitle} />
    </>
  );
};

export default SectionPreview;
