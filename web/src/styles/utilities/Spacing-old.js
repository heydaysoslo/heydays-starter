import { css } from "styled-components";
import { above } from "./Breakpoints";
import { remSize } from "./Converters";

const sizes = {
  sm: {
    sm: 5,
    md: 10,
    lg: 15
  },
  md: {
    sm: 10,
    md: 20,
    lg: 30
  },
  lg: {
    sm: 20,
    md: 30,
    lg: 40
  },
  xl: {
    sm: 50,
    md: 100,
    lg: 200
  }
};

/**
 * Usage:
 * ${spacing('xl', 'margin-left')} || ${spacing('xl', ['margin-left', margin-right])}
 */

// export const spacing = (size = "md", props) => {
//   if (!sizes[size]) return null;
//   const label = sizes[size];

//   const res = Object.keys(label).reduce((acc, bp) => {
//     const spacing = sizes[size][bp];
//     acc.push(
//       ...above[bp]`
//       ${
//         typeof props === "string"
//           ? css`
//               ${props}: ${spacing}px;
//             `
//           : props.map(
//               prop =>
//                 css`
//                   ${prop}: ${spacing}px;
//                 `
//             )
//       }
//   `
//     );
//     return acc;
//   }, []);

//   return res;
// };

/**
 * Usage:
 * ${spacing.md('margin-left')} || ${spacing.md(['margin-left', 'margin-right'])}
 */

// Map though sizes and create an object of functions. One function per size
export const spacing = Object.keys(sizes).reduce((res, size) => {
  // Create function for spesific size
  res[size] = (props = "margin-top") =>
    // Map through breakpoints for size
    Object.keys(sizes[size]).reduce((acc, bp) => {
      // Get spacing value for spesific breakpoint
      const spacing = sizes[size][bp];
      // Add breakpoint string + props and value for breakpoint
      // with check for string or array
      acc.push(
        ...above[bp]`
           ${
             typeof props === "string"
               ? css`
                   ${props}: ${remSize(spacing)};
                 `
               : props.map(
                   prop =>
                     css`
                       ${prop}: ${remSize(spacing)};
                     `
                 )
           }
       `
      );
      return acc;
    }, []);
  return res;
}, {});
