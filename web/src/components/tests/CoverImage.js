import React from 'react'
import styled, { css } from 'styled-components'
import { Cover } from '../elements'

const CoverBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://source.unsplash.com/pqIRqzMTVlo');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: multiply;
`

const CoverImage = ({ children, className }) => {
  // const [count, setCount] = useState(1)
  const content = children ? children : <p>Kilter</p>
  return (
    <Cover className={className} ratio={4 / 3} background={<CoverBackground />}>
      <div className="CoverImage__content">
        {content}
        <footer>&rarr;</footer>
      </div>
    </Cover>
  )
}

export default styled(CoverImage)(
  ({ theme }) => css`
    background: silver;
    overflow: hidden;
    .CoverImage__content {
      padding: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      footer {
        margin-top: auto;
        padding-top: 20px;
      }
    }
    button {
      background: red;
      border: 2px solid black;
      padding: 10px;
      cursor: pointer;
    }
  `
)
