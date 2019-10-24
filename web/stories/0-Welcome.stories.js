import React from 'react'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
// import '../src/styles/app.scss'

export default {
  title: 'Welcome'
}

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />

toStorybook.story = {
  name: 'to Storybook'
}
