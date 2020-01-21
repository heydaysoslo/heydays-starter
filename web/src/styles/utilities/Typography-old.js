import { css } from "styled-components";
import { above } from "./Breakpoints";
import { remSize } from "./Converters";

const sizes = {
  h1: {
    sm: 40,
    md: 60,
    lg: 80
  },
  h2: {
    sm: 40,
    md: 60,
    lg: 80
  },
  h3: {
    sm: 40,
    md: 60,
    lg: 80
  },
  p: {
    sm: 18,
    md: 20,
    lg: 24
  },
  lead: {
    sm: 50,
    md: 100,
    lg: 200
  },
  small: {
    sm: 14,
    md: 14,
    lg: 16
  }
};

/**
 * ${font.h1}
 * @param {*} size
 */

export const font = Object.keys(sizes).reduce((accumulator, label) => {
  const bps = Object.keys(sizes[label]);
  accumulator[label] = () => css`
    ${bps.map(
      bp => above[bp]`
        font-size: ${remSize(sizes[label][bp])};`
    )}
  `;
  return accumulator;
}, {});
