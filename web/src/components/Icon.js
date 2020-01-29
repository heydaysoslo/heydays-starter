import React from 'react'
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
 * <Icon name="calendar" modifiers="large" />
 *
 * @param {string} name // name of the icon file without extension.
 */

const Icon = ({ className, name = 'calendar' }) => {
  const data = useStaticQuery(query)
  const icons = data?.allFile?.nodes

  // create object with all the icon files imported
  const imports = icons.reduce((acc, icon) => {
    acc[icon.name] = require(`../assets/icons/${icon.name}${icon.ext}`)
    return acc
  }, {})

  // Get correct icon based on name prop
  const Comp = imports[name]

  if (!Comp) {
    console.warn(`Icon with name ${name} does not exist 🤷‍♂️`)
    return null
  }

  return (
    <div className={className}>
      <Comp />
    </div>
  )
}

const ICON_MODIFIERS = {
  small: ({ theme }) => css`
    height: ${theme.icons.small};
  `,
  large: ({ theme }) => css`
    height: ${theme.icons.large};
  `
}

export default styled(Icon)(
  ({ theme }) => css`
    display: inline-block;
    height: ${theme.icons.medium};

    ${applyStyleModifiers(ICON_MODIFIERS)}

    svg {
      height: 100%;
    }

    .cls-3 {
      fill: green;
    }
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
