import { useEffect } from 'react'

/**
 * https://itnext.io/console-rules-b30560fc2367
 */

const Credits = () => {
  useEffect(() => {
    console.groupCollapsed('Credits')
    console.log(
      `
      +--------+           +--------+
      |--------|           |--------|
      |--------|           |--------|
      |--------|           |--------|
      |--------|           |--------|
      |--------|           |--------|
      |--------|           |--------|
      |-----------------------------|
      |-----------------------------|
      |-----------------------------|
      |-----------------------------|
      |--------|           |--------|
      |--------|           |--------|
      |--------|           |--------|
      |--------|           |--------|
      |--------|           |--------|
      |--------|           |--------|
      +--------+           +--------+


       Designed and coded by Heydays
      `
    )
    console.groupEnd()

    const styles = `
      background: black;
      color: white;
      font-size: 20px;
      display: block;
      padding: 10px 20px;
      font-weight: normal;
      text-align: center;
      white-space: nowrap;
      word-break: no-break;
      word-wrap: keep-all;
      line-height: 1.5;
      font-family: arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      width: 100%;
      animation: rotate 5s linear;

      @keyframes rotate {
        to {
          transform: rotate(360deg);
        }
      }
    `
    console.log(`%c Designed and coded by Heydays`, styles)
  }, [])
  return null
}

export default Credits
