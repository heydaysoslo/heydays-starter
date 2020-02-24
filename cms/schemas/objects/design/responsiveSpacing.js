import { breakpoints } from "../../../../web/src/styles/themes";

const fields = Object.keys(breakpoints).map(key => ({
  name: key,
  title: key,
  type: "string"
}));

export default {
  name: "responsiveSpacing",
  title: "Responsive Spacing",
  type: "object",
  options: {
    collapsible: true
  },
  fields: [...fields]
};
