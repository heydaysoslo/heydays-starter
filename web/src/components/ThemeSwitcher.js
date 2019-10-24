import React, { useEffect } from 'react'
import Button from './Button'

export const themes = ['default', 'light', 'dark']

const setTheme = () => {
  const stylesheet = document.querySelector('link[type="text/css"]')
  stylesheet && document.head.appendChild(stylesheet)
}

const ThemeSwitcher = () => {
  useEffect(() => {
    themes.map(theme => require(`../styles/app-${theme}.scss`))
  }, [])
  return (
    <Button variant="primary" onClick={setTheme}>
      Random theme
    </Button>
  )
}

export default ThemeSwitcher
