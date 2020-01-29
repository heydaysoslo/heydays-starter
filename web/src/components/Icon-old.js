import React from 'react'
import cc from 'classcat'

/*
 *   Usage
 *
 *   <Icon name="<name-of-icon>" <size> />
 *
 *   Ex.
 *   <Icon name="clock" size="small" />
 *
 *   only use size if you don't want default.
 *   Default size is defined in defaultProps.
 */

const Wrapper = ({ children, className, size }) => {
  return (
    <svg
      width="120px"
      height="120px"
      viewBox="0 0 200 200"
      className={cc({
        Icon: true,
        [className]: className,
        [`Icon--${size}`]: size
      })}
    >
      {children}
    </svg>
  )
}

const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'check':
      return (
        <Wrapper {...props}>
          <line
            x1="25.53"
            y1="83.11"
            x2="77"
            y2="130.73"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10.85"
          />
          <line
            x1="174.47"
            y1="48.94"
            x2="88.18"
            y2="151.06"
            fill="none"
            stroke="#482890"
            strokeWidth="10.85"
          />
        </Wrapper>
      )
    case 'collaboration':
      return (
        <Wrapper {...props}>
          <circle
            cx="139.93"
            cy="48.01"
            r="17.94"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <circle
            cx="70.96"
            cy="118.91"
            r="17.94"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <line
            x1="70.96"
            y1="149.73"
            x2="70.96"
            y2="169.93"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="39.76"
            y1="169.01"
            x2="102.15"
            y2="169.01"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="91.2"
            y1="94.66"
            x2="115.05"
            y2="68.97"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="148.33"
            y1="78.46"
            x2="160.24"
            y2="133.17"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
        </Wrapper>
      )
    case 'group':
      return (
        <Wrapper {...props}>
          <path
            d="M19.35,154.18a24.67,24.67,0,0,1,49.33,0"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <circle
            cx="44.4"
            cy="98.01"
            r="14.8"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <path
            d="M75.06,116.79a24.67,24.67,0,1,1,49.33,0"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <circle
            cx="100.11"
            cy="60.62"
            r="14.8"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <path
            d="M131.32,154.18a24.67,24.67,0,0,1,49.33,0"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <circle
            cx="156.37"
            cy="98.01"
            r="14.8"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
        </Wrapper>
      )
    case 'house':
      return (
        <Wrapper {...props}>
          <path
            d="M52.31,100.73V165.2h95.38V100.73"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <polyline
            points="167 92.6 100 34.8 32.99 92.6"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
        </Wrapper>
      )
    case 'phone':
      return (
        <Wrapper>
          <path
            d="M54.24,150.9v-118A16.94,16.94,0,0,1,71.18,16h57.64a16.94,16.94,0,0,1,16.94,16.94v118"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="80.33"
            y1="36.44"
            x2="121.29"
            y2="36.44"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <path
            d="M54.24,162.66v4.43A16.94,16.94,0,0,0,71.18,184h57.64a16.94,16.94,0,0,0,16.94-16.94v-4.17"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
        </Wrapper>
      )
    case 'plus':
      return (
        <Wrapper {...props}>
          <line
            x1="100"
            y1="170.67"
            x2="100"
            y2="29.33"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="81.69"
            y1="100"
            x2="29.33"
            y2="100"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <line
            x1="170.67"
            y1="100"
            x2="118.04"
            y2="100"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
        </Wrapper>
      )
    case 'search':
      return (
        <Wrapper {...props}>
          <line
            x1="100"
            y1="170.67"
            x2="100"
            y2="29.33"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="81.69"
            y1="100"
            x2="29.33"
            y2="100"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <line
            x1="170.67"
            y1="100"
            x2="118.04"
            y2="100"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
        </Wrapper>
      )
    case 'settings':
      return (
        <Wrapper {...props}>
          <circle
            cx="119.22"
            cy="97.95"
            r="16.5"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <circle
            cx="83.49"
            cy="150.66"
            r="16.5"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="112.16"
            y1="151.07"
            x2="169.24"
            y2="151.07"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <line
            x1="30.76"
            y1="151.07"
            x2="53.71"
            y2="151.07"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <line
            x1="148.27"
            y1="98.73"
            x2="169.24"
            y2="98.73"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="30.76"
            y1="98.73"
            x2="90.22"
            y2="98.73"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <circle
            cx="74.18"
            cy="49.34"
            r="16.5"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="102.85"
            y1="49.74"
            x2="169.24"
            y2="49.74"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <line
            x1="30.76"
            y1="49.74"
            x2="46.1"
            y2="49.74"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
        </Wrapper>
      )
    case 'wand':
      return (
        <Wrapper {...props}>
          <line
            x1="83.48"
            y1="32.36"
            x2="94.07"
            y2="67.81"
            fill="none"
            stroke="#ff5750"
            strokeWidth="10"
          />
          <line
            x1="124.19"
            y1="88.75"
            x2="161.21"
            y2="91.01"
            fill="none"
            stroke="#ff5750"
            strokeWidth="10"
          />
          <line
            x1="103.5"
            y1="85.34"
            x2="38.79"
            y2="167.64"
            fill="none"
            stroke="#3c1f83"
            strokeWidth="10"
          />
          <line
            x1="137.51"
            y1="41.47"
            x2="112.95"
            y2="72.71"
            fill="none"
            stroke="#ff5750"
            strokeWidth="10"
          />
        </Wrapper>
      )
    case 'wink':
      return (
        <Wrapper {...props}>
          <ellipse
            cx="71.58"
            cy="69.78"
            rx="13.55"
            ry="13.22"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="108.66"
            y1="67.57"
            x2="147.39"
            y2="67.57"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <path
            d="M149.38,109.17a52.89,52.89,0,0,1-51,34.25,55.89,55.89,0,0,1-7-.65h0a52.79,52.79,0,0,1-40.8-33.3"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
        </Wrapper>
      )
    case 'chart':
      return (
        <Wrapper {...props}>
          <line
            x1="42.77"
            y1="164.59"
            x2="42.77"
            y2="85.44"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="71.39"
            y1="164.59"
            x2="71.39"
            y2="110.77"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <line
            x1="100"
            y1="164.59"
            x2="100"
            y2="35.41"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
          <line
            x1="128.61"
            y1="164.59"
            x2="128.61"
            y2="91.32"
            fill="none"
            stroke="#ff615a"
            strokeWidth="10"
          />
          <line
            x1="157.23"
            y1="164.59"
            x2="157.23"
            y2="61.94"
            fill="none"
            stroke="#482890"
            strokeWidth="10"
          />
        </Wrapper>
      )
    default:
      return null
  }
}

export default Icon
