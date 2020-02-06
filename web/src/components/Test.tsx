import React from 'react'
import styled, { css } from 'styled-components'
import { Grid, GridItem } from './elements'
import ResponsiveMenu from './ResponsiveMenu'

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
      <ResponsiveMenu>
        {[...new Array(12)].map((box, i) => (
          <p>Menu {i + 1}</p>
        ))}
      </ResponsiveMenu>
      <Grid columns={1} gap="px">
        {[...new Array(12)].map((box, i) => (
          <Box>{i + 1}</Box>
        ))}
      </Grid>
      <Grid gap="px">
        <GridItem offset={3} span={{ xs: 4, md: 5, lg: 2 }}>
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
