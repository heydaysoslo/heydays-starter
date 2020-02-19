import React from 'react'
import styled from 'styled-components'

import SanityImage from '../editor/SanityImage'

const StyledAuthor = styled.div`
  display: flex;
  align-items: center;

  > .image {
    width: 100px;
    flex: 1 1 50%;
    margin-right: 10px;
    img {
      border-radius: 9999px;
    }
  }

  > .name {
    flex: 1 1 50%;
  }
`

export default function Author({ person }) {
  return (
    <StyledAuthor>
      {person?.image && (
        <div className="image">
          <SanityImage node={person.image} aspectRatio="square" />
        </div>
      )}
      {person?.name && <h4 className="title">{person.name}</h4>}
    </StyledAuthor>
  )
}
