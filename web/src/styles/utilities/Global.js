import { createGlobalStyle, css } from 'styled-components'
import { spacing } from './Spacing'
import themes from '../themes'
import { bp } from './Breakpoints'
import { fonts } from './Typography'

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote {
  &:before,
  &:after {
    content: "";
    content: none;
  }
}

q {
  &:before,
  &:after {
    content: "";
    content: none;
  }
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

img,
svg {
  vertical-align: middle; /* remove spacing berfore/after*/
}
/* Add visible tag that shows breakpoint for dev environment */
${process.env.NODE_ENV === 'development' &&
  css`
    body:after {
      background: rgba(255, 255, 255, 0.5);
      position: fixed;
      bottom: 0;
      left: 0;
      ${spacing.xs('py,px')}
      ${fonts.body()}

      ${Object.keys(themes.breakpoints).map(
        key =>
          css`
            ${bp.above[key]`content: '${key}';`}
          `
      )}
    }
  `}
html {
  font-size: 62.5%;
}
`
