import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../src/components/Button'
import '../src/styles/app.scss'
import Grid from '../src/components/Grid'

export default {
  title: 'Button'
}

export const variants = () => (
  <Grid columns={{ sm: 1, md: 2 }} margin="y">
    <Button variant="primary" onClick={action('clicked')}>
      Hello Button
    </Button>
    <Button variant="secondary" onClick={action('clicked')}>
      Hello Button
    </Button>
  </Grid>
)

export const primary = () => (
  <Button variant="primary" onClick={action('clicked')}>
    Hello Button
  </Button>
)

export const secondary = () => (
  <Button variant="secondary" onClick={action('clicked')}>
    Secondary button
  </Button>
)
