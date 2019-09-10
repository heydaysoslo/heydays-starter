# Heydays starter

## Getting started

- Run `npx heydays-cli setup` in parent directory of where you want your project.
- `cd <project-name>/cms && sanity init`
- Grab `projectId` from `cms/sanity.json`
- Duplicate `.env-sample` and rename to `.env`. Add in `projectId` to `SANITY_PROJECT_ID`
- In project root run `yarn deploy:graphql`
- `yarn start`

## Before deploy

- Add .env variables to netlify settings>build&deploy>environment

### Tech

- Lerna for handling monorepos
- Yarn workspace addon for handling monorepos
- Gatsby for static site building
- React
- Sanity for cms
- Netlify for deploying
  - Functions for handling tasks that can't be performed on the client

---

### Commands

#### `yarn start`

To start the project

---

### Folder structure

```
project/
├── cms/
│   ├── heydays-config.js
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   └── bootstrap-theme.min.css
├── web/
│   ├── heydays-config.js
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   └── bootstrap-theme.min.css
├── .env
├── bootstrap.min.css
└──
```
