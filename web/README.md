# Heydays-starter web

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/heydaysoslo/heydays-starter)

### Stylelinting

We now use [📚`stylelint-prettier/recommended`](https://github.com/prettier/stylelint-config-prettier/blob/master/src/index.js) for our stylelinting. This is controlled in `package.json`. Also check out [📚stylelint-prettier](https://github.com/prettier/stylelint-prettier).

#### Bring your own rules

[📚 Stylelint docs](https://stylelint.io/user-guide/rules)

```json
// In package.json
{
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

### netlify.toml

Netlify does not like monorepos that much. Therefore we'll need a little work around.
We need two toml files one in the root which is the one netlify will use, and on in the
`/web` root which `gatsby-plugin-netlify-functions` will use. You only need the output
path for the one in `/web`.

Enviroment variables for production are kept in the .toml file. Make sure you update both places when you change a value.

### TypeScript

- 📚Docs: https://www.typescriptlang.org/docs/home.html
- 📹 Basics: https://www.youtube.com/watch?v=ahCwqrYpIuM
- 📹 With hooks: https://www.youtube.com/watch?v=oQZJxyMoLws
