import React from 'react'
import styled, { css } from 'styled-components'
import { Grid, GridItem, BlockGrid } from './elements'
// import ResponsiveMenu from './ResponsiveMenu'

const Box = styled.div`
  background: ${props => props.color || 'orange'};
  /* border: 2px solid rgba(0, 0, 0, 0.5); */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 10px;
  text-align: center;
  min-height: 100px;
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
      <Grid gap="px" columns={{ xs: 2, sm: 4 }}>
        <Box color="purple">Hello</Box>
        <Box color="red">Hello</Box>
        <Box color="blue">Hello</Box>
        <Box color="green">Hello</Box>
        <Box color="silver">Hello</Box>
        <Box color="coral">Hello</Box>
        <Box color="gray">Hello</Box>
        <Box color="yellow">Hello</Box>
        <div>
          <p>Nested grid with gaps</p>
          <Grid gap="px" columns={2}>
            <Box color="purple">Nested box 1</Box>
            <Box color="red">Nested box 2</Box>
          </Grid>
        </div>
        <div>
          <p>Nested grid no gaps</p>
          <Grid columns={{ xs: 2, lg: 4 }}>
            <Box color="purple">Nested box 1</Box>
            <Box color="red">Nested box 2</Box>
            <Box color="silver">Nested box 3</Box>
            <Box color="gray">Nested box 4</Box>
          </Grid>
        </div>
      </Grid>

      <h3>Flex grid (gaps)</h3>
      <Grid gap="px">
        <GridItem>
          <Box color="purple">Hello</Box>
        </GridItem>
        <GridItem>
          <Box color="silver">Hello</Box>
        </GridItem>
      </Grid>

      <Grid columns={1} gap="px">
        {[...new Array(12)].map((box, i) => (
          <Box>{i + 1}</Box>
        ))}
      </Grid>
      <Grid gap="px">
        <GridItem offset={3} span={{ xs: 4, md: 5, lg: 2 }}>
          <Box color="purple">Hello</Box>
          <Grid>
            <GridItem span={7}>
              <Box color="purple">Hello</Box>
            </GridItem>
            <GridItem span={5}>
              <Box color="red">There</Box>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem span={3}>
          <Box color="red">There</Box>
        </GridItem>
      </Grid>
    </div>
  )
}

export default styled(Test)(({ theme }) => css``)
