import React, { Component } from 'react'
import flickity from 'flickity'
import keygen from 'uuid/v1'

class Flickity extends Component {
  state = {
    id: `flickity-${keygen()}`,
    flkty: null
  }
  static defaultProps = {
    // groupCells: true,
    // freeScroll: false,
    wrapAround: true,
    // imagesLoaded: false,
    // lazyLoad: false,
    // contain: true
    pageDots: false
    // prevNextButtons: false
    // adaptiveHeight: true
  }
  componentDidMount() {
    const { id } = this.state
    this.setState({
      flkty: new flickity(
        `#${id}`,
        {
          ...this.props,
          initialIndex: Math.floor(this.props.children.length / 2)
        },
        () => {
          this.state.flkty.on('dragStart', this.handleDrag)
          this.state.flkty.on('dragEnd', this.handleDrag)
        }
      )
    })
    const wrapper = document.getElementById(id)
    wrapper.addEventListener(
      'touchstart',
      this.touchStart,
      {
        passive: true
      },
      {
        passive: true
      }
    )
    wrapper.addEventListener('touchmove', this.preventTouch, {
      passive: false
    })
  }

  handleDrag = (event, pointer, moveVector) => {
    // console.log('HANDLEDRAG FIRED', event)
    // this.setState({
    //     dragging: true
    // })
  }

  touchStart(e) {
    this.firstClientX = e.touches[0].clientX
    this.firstClientY = e.touches[0].clientY
  }

  preventTouch(e) {
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

  componentWillUnmount() {
    const wrapper = document.getElementById(this.state.id)
    wrapper.removeEventListener('touchstart', this.touchStart)
    wrapper.removeEventListener('touchmove', this.preventTouch, {
      passive: false
    })
    // this.state.flkty.off('dragStart', this.handleDrag)
    // this.state.flkty.off('dragEnd', this.handleDrag)
  }
  render() {
    const { id } = this.state
    return (
      <div id={id} className="Flickity">
        {/* {React.cloneElement(this.props.children, { ...this.props })} */}
        {this.props.children.map((child, index) =>
          React.cloneElement(child, {
            flkty: this.state.flkty,
            index
          })
        )}
      </div>
    )
  }
}

export default Flickity
