import React, { useState, useEffect } from 'react'
import flickity from 'flickity'
import keygen from 'uuid/v1'
import styled, { css } from 'styled-components'
import { bp, spacing, color, remSize } from '../../styles/utilities'

const defaultOptions = {
  // groupCells: true,
  // freeScroll: false,
  wrapAround: false,
  // imagesLoaded: false,
  // lazyLoad: false,
  // contain: true
  pageDots: false
  // prevNextButtons: false
  // adaptiveHeight: true
}

const Carousel = ({ className, children, options = defaultOptions }) => {
  const id = `flickity-${keygen()}`
  const [flkty, setFlkty] = useState(null)

  useEffect(() => {
    setFlkty(
      new flickity(`#${id}`, {
        ...options,
        initialIndex: Math.floor(children.length / 2)
      })
    )
  }, [options, id, children])

  useEffect(() => {
    function touchStart(e) {
      this.firstClientX = e.touches[0].clientX
      this.firstClientY = e.touches[0].clientY
    }

    function preventTouch(e) {
      const minValue = 5 // threshold

      this.clientX = e.touches[0].clientX - this.firstClientX
      this.clientY = e.touches[0].clientY - this.firstClientY

      // Vertical scrolling does not work when you start swiping horizontally.
      if (Math.abs(this.clientX) > minValue) {
        e.preventDefault()
        e.returnValue = false
        return false
      }
    }
    if (flkty) {
      // console.log('TCL: Carousel -> flkty', flkty)
      // flkty.on('dragStart', this.handleDrag)
      // flkty.on('dragEnd', this.handleDrag)
    }
    const wrapper = document.getElementById(id)
    if (wrapper) {
      wrapper.addEventListener('touchstart', touchStart, {
        passive: true
      })
      wrapper.addEventListener('touchmove', preventTouch, {
        passive: false
      })
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener('touchstart', touchStart)
        wrapper.removeEventListener('touchmove', preventTouch, {
          passive: false
        })
      }
    }
  }, [children, id, options, flkty])
  return (
    <div className={className} id={id}>
      {children.map((child, index) => (
        <figure key={child?.props?.node?._key} className="item">
          {React.cloneElement(child, {
            flkty,
            index
          })}
        </figure>
      ))}
    </div>
  )
}

export default styled(Carousel)(
  ({ theme }) => css`
    position: relative;
    max-width: 100%;


    /*! Flickity v2.1.2 https://flickity.metafizzy.co
    ---------------------------------------------- */

    .flickity-enabled {
      position: relative;
    }

    .flickity-enabled:focus {
      outline: none;
    }

    .flickity-viewport {
      overflow: hidden;
      position: relative;
      height: 100%;

      figure {
        opacity: 0;
        transition: 1s ease;
      }
      .is-selected {
        opacity: 1;
      }
    }

    .flickity-slider {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    /* draggable */

    .flickity-enabled.is-draggable {
      -webkit-tap-highlight-color: transparent;
      user-select: none;
    }

    .flickity-enabled.is-draggable .flickity-viewport {
      /* cursor: move;
      cursor: -webkit-grab; */
      cursor: grab;
    }

    .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
      cursor: grabbing;
    }

    /* ---- flickity-button ---- */

    .flickity-button {
      /* display: none; */
      position: absolute;
      z-index: 2;
      background: ${theme.colors.secondary};
      border: none;
      color: ${theme.colors.text};

      ${spacing.md('p')};

      svg {
        display: none;
      }

      ${bp.above.md`
        display: block;
      `};
    }

    .flickity-button:hover {
      /* background: white; */
      cursor: pointer;
    }

    .flickity-button:focus {
      outline: none;
      box-shadow: 0 0 0 5px #19f;
    }

    .flickity-button:active {
      margin-left: ${remSize(10)};
    }

    .flickity-button:disabled {
      opacity: 0;
      cursor: auto;
      /* prevent disabled button from capturing pointer up event. #716 */
      pointer-events: none;
    }

    .flickity-button-icon {
      fill: black;
    }

    /* ---- previous/next buttons ---- */

    .flickity-prev-next-button {
      top: 50%;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      /* vertically center */
      transform: translateY(-50%);
      transition: ${theme.trans.fast};
      color: ${theme.colors.text};

      &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${theme.colors.primary};
      }
    }

    .flickity-prev-next-button.next {
      right: 0;
      left: auto;
      background: orange;

      &:after {
        content: '\\2192';
        display: block;
      }
    }
    .flickity-prev-next-button.previous {
      left: 0;
      background: red;

      &:after {
        content: '\\2190';
        display: block;
      }
    }

    /* right to left */
    .flickity-rtl .flickity-prev-next-button.previous {
      left: auto;
      right: 10px;
    }
    .flickity-rtl .flickity-prev-next-button.next {
      right: auto;
      left: 10px;
    }

    .flickity-prev-next-button .flickity-button-icon {
      position: absolute;
      left: 30%;
      top: 30%;
      width: 40%;
      height: 40%;
    }

    .item {
      width: 80%;
      background: orange;
      height: 800px;
    }

    /* ---- page dots ---- */

    /* .flickity-page-dots { */
    /* display: none; */
    /* } */

    .flickity-rtl .flickity-page-dots {
      direction: rtl;
    }
/*
    .flickity-page-dots {
      display: flex;
      justify-content: center;
    } */

    .flickity-page-dots .dot {
      cursor: pointer;

      ${spacing.md('py')}
      width: ${remSize(50)};

      &:before {
        content: '';
        width: 100%;
        height: 2px;
        background: ${theme.colors.primary};
        transition: ${theme.trans.fast};
      }

      &:hover {
        &:before {
          background: ${color.darken(theme.colors.primary, 0.2)};
        }
      }

      .is-selected {
        opacity: 1;
      }
    }

    /* .flickity-slider .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    } */
  `
)
