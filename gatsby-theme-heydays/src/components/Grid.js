import React from 'react'
import cc from 'classcat'

/* <BlockGrid span="3" skip="3">
  <GridItem>
  <Card />
  </GridItem>
  <Card />
  <Card />
  <Card />
</BlockGrid>

<Grid>
  <Span span="4"></Span>
  <Span span="8"></Span>
</Grid>
<Grid>
  <Card />
</Grid>

<Grid container spacing={3}>
  <Grid item xs={12}>
    <Paper className={classes.paper}>xs=12</Paper>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Paper className={classes.paper}>xs=12 sm=6</Paper>
  </Grid>
</Grid>

<Grid cols={12} alignItem="baseline" justifyContent="space-between" gutter="md">
  // Items
  <Cell width={[3,2]}>Something</Cell>
  <GridItem width={[3,2]}>Something</GridItem>
  <GridItem xs={3} md={2}>Something</GridItem>
  // Offset
  <Offset xs={3} md={2} />
  <Cell xs={3} md={2} />
</Grid>

<BlockGrid cols={12} size={4} gutter="md">
  {cards.map(card => <Card content={card} />)}
</BlockGrid>

<Grid cols={4} rows={4} gutter="md">
  <Cell x={2} y={1} width={2} height={2}><Card /></Cell>
</Grid> */

/**
 * Usage:
 * <Grid alignment="middle" />
 * @param {alignment} string
 */

const Grid = ({ align = 'start', reverse = false, children }) => {
  return (
    <div
      className={cc({
        row: true,
        [`${align}-xs`]: align,
        reverse: reverse
      })}
    >
      {children}
    </div>
  )
}

export default Grid
