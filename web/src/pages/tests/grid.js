import React from 'react'
import styled, { css } from 'styled-components'
import { Grid, GridItem, Container } from '../../components/elements'
import { spacing } from '../../styles/utilities'

const Box = styled.div`
  ${spacing.sm('p')};
  background: rgba(86, 61, 124, 0.15);
  border: 1px solid rgba(86, 61, 124, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-align: center;
`

const SampleSection = styled.div`
  padding: 20px;
  border: 2px solid #f8f9fa;
  margin-top: 40px;
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

const StyledGridItem = styled(GridItem)`
  opacity: 0.5;
`

const GridTest = ({ className }) => {
  return (
    <>
      <div className={className}>
        <Container>
          <h1>Grids</h1>

          <SampleSection>
            <Grid>
              <Box>Auto column</Box>
              <Box>Auto column</Box>
              <Box>Auto column</Box>
              <Box>Auto column</Box>
              <Box>Auto column</Box>
              <GridItem span={'50%'}>
                <Box>50% width</Box>
              </GridItem>
            </Grid>
          </SampleSection>

          <SampleSection>
            <Grid columns={3}>
              <Box>Forced columns</Box>
              <Box>Forced columns</Box>
              <Box>Forced columns</Box>
              <Box>Forced columns</Box>
              <Box>Forced columns</Box>
            </Grid>
          </SampleSection>

          <SampleSection>
            <Grid gap={10} columns={3}>
              <Box>Forced columns 10px gap</Box>
              <Box>Forced columns 10px gap</Box>
              <Box>Forced columns 10px gap</Box>
              <Box>Forced columns 10px gap</Box>
              <Box>Forced columns 10px gap</Box>
              <Box>Forced columns 10px gap</Box>
            </Grid>
          </SampleSection>

          <SampleSection>
            <Grid gap={false} columns={3}>
              <Box>Different gap units</Box>
              <Box>Different gap units</Box>
              <Box>Different gap units</Box>
              <Box>Different gap units</Box>
              <Box>Different gap units</Box>
              <Box>Different gap units</Box>
            </Grid>
          </SampleSection>

          <Grid gap={true}>
            <StyledGridItem span={{ xs: 12, md: 6, lg: 3, xl: 'auto' }}>
              <Box>Styled grid item</Box>
            </StyledGridItem>
            <GridItem>
              <Box>This is another grid item</Box>
            </GridItem>
            {[...new Array(6)].map((box, i) => (
              <Box>{i + 1}</Box>
            ))}
          </Grid>

          <Grid gapX={true} gapY={true}>
            <GridItem span={{ xs: 6 }}>
              <Box>Single item</Box>
            </GridItem>
            <GridItem span="auto">
              <Box>This is fitting the content.</Box>
            </GridItem>
            <GridItem>
              <Box>These</Box>
            </GridItem>
            <GridItem>
              <Box>are</Box>
            </GridItem>
            <GridItem>
              <Box>distributed</Box>
            </GridItem>
            <GridItem>
              <Box>equally</Box>
            </GridItem>
          </Grid>

          <Grid gap={true}>
            <GridItem span={{ xs: 3 }} offset={{ sm: 1, md: 3, lg: 5 }}>
              <Box>Hello</Box>
            </GridItem>
          </Grid>
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
          <div>MAKING SURE THERES NO SPACE</div>
          <Grid gap={true}>
            <Box>A</Box>
            <Box>grid</Box>
            <Box>with</Box>
            <Box>gaps</Box>
          </Grid>
          <div>MAKING SURE THERES NO SPACE</div>
          <Grid gap={true}>
            <Box>Another</Box>
            <Box>grid</Box>
            <Box>with</Box>
            <Box>gaps</Box>
          </Grid>
          <div>MAKING SURE THERES NO SPACE</div>
        </Container>
      </div>
    </>
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
