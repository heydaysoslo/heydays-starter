import React from "react";
import styled from "styled-components";
import TitleBar from "./TitleBar";
import Editor from "./Editor";

const Wrapper = styled.div`
  display: flex;
  border: 1px solid black;

  .half {
    width: 50%;
    padding: 0 5px;
  }

  img {
    max-width: 100%;
  }
`;

const TextImageSplitPreview = ({ value, ...props }) => {
  if (!value) return <p>loading</p>;
  const { title, textOnTheRight, imageUrl, subtitle, content } = value;
  console.log(value, props);
  return (
    <>
      <Wrapper>
        <div className="half">
          {textOnTheRight ? (
            <img src={imageUrl} alt={`${title && title} movie poster`} />
          ) : (
            <>
              {title && <h3>{title}</h3>}
              {content && <Editor blocks={content} />}
            </>
          )}
        </div>
        <div className="half">
          {textOnTheRight ? (
            <>
              {title && <h3>{title}</h3>}
              {content && <Editor blocks={content} />}
            </>
          ) : (
            <img src={imageUrl} alt={`${title && title} movie poster`} />
          )}
        </div>
      </Wrapper>
      <TitleBar title={subtitle} />
    </>
  );
};

export default TextImageSplitPreview;
