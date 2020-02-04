import React from 'react'
import styled, { css } from 'styled-components'
import { Grid, GridItem } from './elements'

const Box = styled.div`
  background: ${props => props.color || 'orange'};
  border: 1px solid white;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Test = ({ className }) => {
  return (
    <div className={className}>
      <Grid columns={1} spacing="px">
        {[...new Array(12)].map((box, i) => (
          <Box>{i + 1}</Box>
        ))}
      </Grid>
      <Grid spacing="px">
        <GridItem span={{ xs: 4, md: 5, lg: 2 }}>
          <Box color="purple">Hello</Box>
        </GridItem>
        <GridItem span={3}>
          <Box color="red">There</Box>
        </GridItem>
      </Grid>
    </div>
  )
}

export default styled(Test)(({ theme }) => css``)

/**
 * Proposal grid props:
 *
 * <Grid
 *  gap={SpacingMixins} // Effects children
 *  gapX={SpacingMixins} // Effects children
 *  gapY={SpacingMixins} // Effects children
 *  spacing={SpacingMixins} // Outer container?
 * />
 */
