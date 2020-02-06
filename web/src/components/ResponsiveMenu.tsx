import React, { useRef, useEffect, useContext, useState } from 'react'
import styled, { css } from 'styled-components'

import AppContext from './context/AppContext'
import { spacing } from '../styles/utilities'

import { useWindowSize } from './hooks'
import { Button, Container, FadeIn } from './elements'
import Portal from './Portal'

type Props = {
  children: React.ReactNode
  className?: string
}

type ModalProps = {
  trigger: boolean
}

type AppContext = {
  state: any
  actions: any
}

const ResponsiveMenu: React.FC<Props> = ({ className, children }) => {
  const [showMenuButton, setShowMenuButton] = useState(false)
  const container = useRef<HTMLDivElement | null>(null)
  const itemsContainer = useRef<HTMLDivElement | null>(null)
  const hidden = useRef<HTMLDivElement | null>(null)
  const windowSize = useWindowSize({ debounce: 50 })
  const { state, actions } = useContext<AppContext>(AppContext)

  useEffect(() => {
    if (container?.current && hidden?.current && itemsContainer?.current) {
      // Reset put all items back into container
      const allItems = [
        ...container.current.querySelectorAll('.item'),
        ...hidden.current.querySelectorAll('.item')
      ]
      allItems.forEach(item => itemsContainer?.current?.appendChild(item))

      // Get all items
      const items = [...itemsContainer.current.querySelectorAll('.item')]

      // Get container dimensions
      const containerDimensions = container.current.getBoundingClientRect()
      const containerWidth = containerDimensions.x + containerDimensions.width

      // Add all items outside the container to hidden items
      const hiddenItems = items.filter(item => {
        const { x, width } = item.getBoundingClientRect()
        const itemWidth = x + width
        return itemWidth > containerWidth
      })

      // Hide button if all items are visble
      if (hiddenItems.length === 0) {
        setShowMenuButton(false)
      } else {
        setShowMenuButton(true)
        // Add hidden items to menu modal
        hiddenItems.forEach(item => hidden?.current?.appendChild(item))
      }
    }
  }, [windowSize, setShowMenuButton])

  if (!children) return null

  return (
    <div className={className}>
      <div className="container">
        <div className="visible-menu-container" ref={container}>
          <div className="visible-menu" ref={itemsContainer}>
            {React.Children.map(children, (child: any, i: number) => (
              <div className="item">{child}</div>
            ))}
          </div>
        </div>
        {showMenuButton && (
          <Button modifiers={['small']} onClick={() => actions.toggleMenu()}>
            {state?.showMenu ? 'Close' : 'Menu'}
          </Button>
        )}
      </div>
      <Portal>
        <FadeIn trigger={state.showMenu}>
          <MenuModal trigger={state.showMenu}>
            <Container className="container">
              <Button
                as="a"
                className="close"
                onClick={() => actions.toggleMenu()}
              >
                {state?.showMenu ? 'Close' : 'Menu'}
              </Button>
              <div className="wrapper" ref={hidden}></div>
            </Container>
          </MenuModal>
        </FadeIn>
      </Portal>
      <div className="menu" />
    </div>
  )
}

const MenuModal = styled.div<ModalProps>(
  ({ theme, trigger }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: ${trigger ? 'auto' : 'none'};
    background: ${theme.colors.background};
    z-index: 999;

    .close {
      position: absolute;
      top: 0;
      right: 0;
    }
  `
)

export default styled(ResponsiveMenu)(
  ({ theme }) => css`
    flex: 1 1 100%;
    min-width: 0;

    .container {
      display: flex;
      align-items: baseline;
    }

    .item {
      display: inline-block;
      ${spacing.gutter('px')}
      white-space: nowrap;
    }

    .visible-menu-container {
      width: 100%;
      overflow: hidden;
    }

    .visible-menu {
      display: flex;
      flex-wrap: nowrap;
    }
  `
)
