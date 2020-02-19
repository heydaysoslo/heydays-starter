import React, { useState, useEffect, ComponentType, Component } from 'react'
import styled, { css } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { applyStyleModifiers } from 'styled-components-modifiers'

/**
 *
 * Converts svg files from icons folder into react components with inline svg.
 * To change folder see `gatsby-config.js` and query below
 *
 * Usage:
 * <Icon name="check" modifiers="small" />
 * <Icon name="config" />
 * <Icon name="calendar" color="orange"/>
 * <Icon name="calendar" modifiers="large" />
 *
 * @param {string} name // name of the icon file without extension.
 * @param {string} color // overrides colors
 */

type Name =
  | 'calendar'
  | 'check'
  | 'cloud'
  | 'concept'
  | 'house'
  | 'fullstack'
  | 'config'
  | 'graph'
  | 'link'
  | 'process'
  | 'plus'
  | 'mobile'
  | 'science'
  | 'search'
  | 'ux'
  | 'team'
  | 'wink'
  | 'wand'

type Modifiers = 'small' | 'medium' | 'large'

type Props = {
  name: Name
  color?: string
  className?: string
  modifiers?: Modifiers | Modifiers[]
}

const Icon = ({ className, name = 'calendar' }: Props) => {
  const data = useStaticQuery(query)
  const icons = data?.allFile?.nodes
  const [Component, setComponent] = useState<ComponentType<{
    className?: string
  }> | null>(null)

  const icon = icons.find(
    icon => icon.name.toLowerCase() === name.toLowerCase()
  )

  useEffect(() => {
    if (icon?.name && icon?.ext) {
      import(`../../assets/icons/${icon.name}${icon.ext}`).then(comp => {
        setComponent(() => comp.default) // Renderer expects a functional component
      })
    }
  }, [icon])

  if (!icon) {
    console.warn(`Icon with name ${name} does not exist 🤷‍♂️`)
    return null
  }

  return Component && <Component className={className} />
}

// Create modifiers based on theme.icons settings. Modifier name will be
// the same as the key value of theme.icons ex. 'large'
const ICON_MODIFIERS = theme =>
  Object.keys(theme.icons).reduce((obj, key) => {
    obj[key] = ({ theme }) => css`
      height: ${theme.icons[key]};

      /* Type spesific styling in this case size */
      ${key === 'large' &&
        css`
          .cls-3 {
            fill: red;
          }
        `}
    `
    return obj
  }, {})

export default styled(Icon)<Props>(
  ({ theme, color }) => css`
    display: inline-block;
    height: ${theme.icons.medium};

    svg {
      height: 100%;
    }

    .cls-3 {
      fill: green;
    }

    ${applyStyleModifiers(ICON_MODIFIERS(theme))}

    /* Override color */
    ${color &&
      css`
        .cls-3,
        .cls-2 {
          fill: ${color};
        }
      `}
  `
)

// Get all file names in icon folder with svg extension
export const query = graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/icons/" }, extension: { eq: "svg" } }
    ) {
      nodes {
        extension
        name
        ext
      }
    }
  }
`
