import React, { useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Layout from '../../../components/Layout'
import { Container } from '../../../components/elements'
import { useWindowSize, useCanvas } from '../../../components/hooks'

const Index = ({ className }) => {
  const container = useRef(null)
  const canvas = useRef(null)
  const windowSize = useWindowSize()
  const { c, width, height } = useCanvas({ canvas, container })

  useEffect(() => {
    if (c) {
      console.log(c, width, height)
      c.fillRect(0, 0, width, height / 2)
    }
  }, [c])
  return (
    <div className={className}>
      <Layout>
        <Container>
          <div className="test-container" ref={container}>
            <canvas ref={canvas}></canvas>
          </div>
          <pre>{windowSize && JSON.stringify(windowSize, null, 2)}</pre>
        </Container>
      </Layout>
    </div>
  )
}

export default styled(Index)(
  ({ theme }) => css`
    background: orange;

    .test-container {
      width: 100%;
      height: 50vh;
    }
  `
)
