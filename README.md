# Heydays starter

## Installation

- Remember to change siteUrl in /web/gatsby-config this is used by the sitemap plugin

<!-- Markdown snippet -->

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/heydaysoslo/heydays-starter)

### Stylelinting

We now use [📚`stylelint-prettier/recommended`](https://github.com/prettier/stylelint-config-prettier/blob/master/src/index.js) for our stylelinting. This is controlled in `package.json`. Also check out [📚stylelint-prettier](https://github.com/prettier/stylelint-prettier).

#### Bring your own rules

[📚 Stylelint docs](https://stylelint.io/user-guide/rules)

```json
// In package.json
{
  // ...other config
  "stylelint": {
    "rules": {
      "declaration-block-no-duplicate-properties": true,
      "block-no-empty": true,
      "declaration-empty-line-before": "never",
      "at-rule-empty-line-before": [
        "always",
        {
          "except": [
            "after-same-name",
            "blockless-after-same-name-blockless",
            "blockless-after-blockless",
            "first-nested"
          ]
        }
      ]
    },
    "extends": ["stylelint-prettier/recommended"]
  }
}
```
