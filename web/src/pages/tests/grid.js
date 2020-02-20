import React from 'react'
import styled, { css } from 'styled-components'
import { Grid, GridItem, Container } from '../../components/elements'
import { spacing } from '../../styles/utilities'
import Layout from '../../components/Layout'

const Box = styled.div`
  ${spacing.sm('p')};
  background: ${props => props.color || props.theme.colors.primary || 'orange'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-align: center;
`

const colors = [
  'silver',
  'purple',
  'gray',
  'pink',
  'lime',
  'coral',
  'red',
  'yellow',
  'blue',
  'green',
  'palegreen',
  'teal'
]

const GridBlocks = props => {
  return (
    <Grid {...props}>
      {[12, 11, 1, 10, 2, 9, 3, 8, 4, 6, 6].map((span, index) => {
        return (
          <GridItem key={`item-${index}`} span={span}>
            <Box color={colors[index]}>{span}</Box>
          </GridItem>
        )
      })}
    </Grid>
  )
}

const GridTest = ({ className }) => {
  return (
    <Layout>
      <div className={className}>
        <Container>
          <h1>Grids</h1>
          <p>
            Make reference similar to{' '}
            <a href="http://flexboxgrid.com/">flexboxgrid.com</a>
          </p>
          <Grid columns={{ sm: 3, md: 6, lg: 12 }} gap={true}>
            {[...new Array(12)].map((box, i) => (
              <Box>{i + 1}</Box>
            ))}
          </Grid>

          <h3>Grid without gaps</h3>
          <GridBlocks />

          <h3>Grid with vertical and horizontal gaps</h3>
          <GridBlocks gap={true} />

          <h3>Grid with horizontal gaps</h3>
          <GridBlocks gapX={true} />

          <h3>Grid with vertical gaps</h3>
          <GridBlocks gapY={true} />

          <h3>Grid with responsive gaps</h3>
          <GridBlocks
            gapX={{ xs: true, sm: false }}
            gapY={{ sm: true, lg: false }}
            gap={{ lg: true }}
          />

          <h3>Grid with custom gap unit</h3>
          <GridBlocks gap={true} gapUnit="xs" />

          <h3>Block grid</h3>
          <Grid columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
            {colors.map((color, index) => {
              return (
                <Box key={`ColorBox-${index}`} color={color}>
                  {color}
                </Box>
              )
            })}
          </Grid>

          <h3>Block grid with gaps</h3>
          <Grid gap={true} columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
            {colors.map((color, index) => {
              return (
                <Box key={`ColorBox-${index}`} color={color}>
                  {color}
                </Box>
              )
            })}
          </Grid>

          <h3>Nested grids</h3>
          <Grid gap={true} columns={{ md: 2 }}>
            <div>
              <h4>No gaps nested</h4>
              <Grid columns={2}>
                <Box>Lorem</Box>
                <Box>Ipsum</Box>
                <Box>Lorem</Box>
                <Box>Ipsum</Box>
              </Grid>
            </div>
            <div>
              <h4>Gaps nested</h4>
              <Grid gap={true} columns={2}>
                <Box>Lorem</Box>
                <Box>Lorem</Box>
                <Box>Lorem</Box>
                <Box>Lorem</Box>
              </Grid>
            </div>
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}

export default styled(GridTest)(
  ({ theme }) => css`
    padding-bottom: 5vw;
    border-bottom: 1px solid silver;
    h1,
    h3 {
      margin-top: 5vw;
      margin-bottom: 1vw;
    }
    h4,
    p {
      margin-top: 1vw;
      margin-bottom: 1vw;
    }
  `
)
