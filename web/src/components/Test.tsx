import React from 'react'
import styled, { css } from 'styled-components'
import { Grid, GridItem, Container } from './elements'
import { spacing } from '../styles/utilities'
// import { ThemeProvider } from 'styled-components'
// import ResponsiveMenu from './ResponsiveMenu'

const Box = styled.div`
  background: ${props => props.color || props.theme.colors.primary || 'orange'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  /* padding: 40px 10px; */
  ${spacing.gutter('p')};
`

const Test = ({ className }) => {
  return (
    <div className={className}>
      <h3>Flex block grid (no gaps)</h3>
      <Grid columns={{ xs: 2, sm: 4 }}>
        <Box color="purple">Hello</Box>
        <Box color="red">Hello</Box>
        <Box color="blue">Hello</Box>
        <Box color="green">Hello</Box>
        <Box color="silver">Hello</Box>
        <Box color="coral">Hello</Box>
        <Box color="gray">Hello</Box>
        <Box color="yellow">Hello</Box>
        <Grid columns={2}>
          <Box color="purple">Nested box 1</Box>
          <Box color="red">Nested box 2</Box>
        </Grid>
        <Grid columns={{ xs: 2, lg: 4 }}>
          <Box color="purple">Nested box 1</Box>
          <Box color="red">Nested box 2</Box>
          <Box color="silver">Nested box 3</Box>
          <Box color="gray">Nested box 4</Box>
        </Grid>
      </Grid>

      <h3>Flex grid (no gaps)</h3>
      <Grid>
        <GridItem>
          <Box color="purple">Hello</Box>
        </GridItem>
        <GridItem>
          <Box color="silver">Hello</Box>
        </GridItem>
      </Grid>

      <h3>Flex block grid (gaps)</h3>
      <Grid gap={true} columns={{ xs: 2, sm: 4 }}>
        <Box color="purple">Hello</Box>
        <Box color="red">Hello</Box>
        <Box color="blue">Hello</Box>
        <Box color="green">Hello</Box>
        <Box color="silver">Hello</Box>
        <Box color="coral">Hello</Box>
        <Box color="gray">Hello</Box>
        <Box color="yellow">Hello</Box>
        <div>
          <Grid gap={true} columns={2}>
            <Box color="purple">Nested grid</Box>
            <Box color="red">with gaps</Box>
          </Grid>
        </div>
        <div>
          <Grid columns={{ xs: 2, lg: 4 }}>
            <Box color="purple">Nested</Box>
            <Box color="red">grid</Box>
            <Box color="silver">no</Box>
            <Box color="gray">gaps</Box>
          </Grid>
        </div>
      </Grid>

      <h3>Flex grid (gaps)</h3>
      <Grid gap={true}>
        <GridItem>
          <Box color="purple">Hello</Box>
        </GridItem>
        <GridItem>
          <Box color="silver">Hello</Box>
        </GridItem>
      </Grid>

      <h3>Responsive gaps test</h3>
      <Grid
        gapX={{ xs: true, sm: false }}
        gapY={{ sm: true, lg: false }}
        gap={{ xl: true }}
        columns={{ xs: 2, sm: 4 }}
      >
        <Box color="purple">Hello</Box>
        <Box color="red">Hello</Box>
        <Box color="blue">Hello</Box>
        <Box color="green">Hello</Box>
        <Box color="silver">Hello</Box>
        <Box color="coral">Hello</Box>
        <Box color="gray">Hello</Box>
        <Box color="yellow">Hello</Box>
      </Grid>

      <Container>
        <Grid gap={true} align="center" justify="center">
          <GridItem span={{ sm: 6, lg: 4 }}>
            <img src="https://source.unsplash.com/random" />
          </GridItem>
          <GridItem span={{ sm: 6, lg: 4 }}>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <h4>Some choices</h4>
            <Grid columns={{ xs: 2, md: 4 }}>
              <div>Feature 1</div>
              <div>Feature 2</div>
              <div>Feature 3</div>
              <div>Feature 4</div>
            </Grid>
          </GridItem>
        </Grid>
      </Container>

      <Container>
        <h3>Flex grid contained (gaps)</h3>
        <Grid gapY={true} gapX={true}>
          <GridItem span={6}>
            <Box color="purple">6</Box>
          </GridItem>
          <GridItem span={6}>
            <Box color="silver">6</Box>
          </GridItem>
          <GridItem span={4}>
            <Box color="purple">4</Box>
          </GridItem>
          <GridItem span={4}>
            <Box color="silver">4</Box>
          </GridItem>
          <GridItem span={4}>
            <Box color="red">4</Box>
          </GridItem>
        </Grid>
        <h3>Space between the planets</h3>
        <Grid columns={{ sm: 3, md: 6, lg: 12 }} gap={true}>
          {[...new Array(12)].map((box, i) => (
            <Box>{i + 1}</Box>
          ))}
        </Grid>
        <h3>Space between your ears</h3>
        <Grid gapX={true}>
          <GridItem span={{ xs: 4, md: 5, lg: 2 }}>
            <Box color="purple">Hello</Box>
            <Grid>
              <GridItem span={0.5}>
                <Box color="purple">Hello</Box>
              </GridItem>
              <GridItem span={0.5}>
                <Box color="red">There</Box>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem span={3}>
            <Box color="red">There</Box>
          </GridItem>
        </Grid>
      </Container>
    </div>
  )
}

export default styled(Test)(({ theme }) => css``)
