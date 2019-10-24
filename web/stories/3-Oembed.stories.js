import React from 'react'
import '../src/styles/app.scss'

import Grid from '../src/components/Grid'
import Oembed from '../src/components/Oembed'

export default {
  title: 'Oembed'
}

export const embed = () => (
  <div>
    <Grid columns={{ sm: 2 }}>
      <Oembed
        storybook
        url="https://soundcloud.com/lenskerecords/amelie-lens-little-robot-lenske007"
      />
      <Oembed storybook url="https://www.youtube.com/watch?v=n5uz7egB9tA" />
      <Oembed storybook url="https://vimeo.com/352390358" />
    </Grid>
  </div>
)
