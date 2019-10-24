import React from 'react'
import Grid, { GridItem } from '../src/components/Grid'
import '../src/styles/app.scss'
import Container from '../src/components/Container'

export default {
  title: 'Grid'
}

const styles = {
  height: '100vh',
  background: 'blue',
  color: 'white',
  textAlign: 'center',
  lineHeight: '100vh',
  fontSize: '40px'
}

export const grid = () => (
  <Grid columns={{ sm: 12 }}>
    {[...new Array(12)].map((x, i) => (
      <div style={styles}>{i + 1}</div>
    ))}
  </Grid>
)

export const layout = () => (
  <Container>
    <Grid>
      <GridItem span={{ sm: 4 }}>
        <aside style={{ ...styles, background: 'green' }}>I'm sidebar</aside>
      </GridItem>
      <GridItem span={{ sm: 8 }}>
        <main style={{ ...styles, background: 'blue' }}>I'm main</main>
      </GridItem>
    </Grid>
  </Container>
)
