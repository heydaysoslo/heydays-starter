# Heydays starter

## Getting started

1. Run `npx heydays-cli setup` in parent directory of where you want your project.
2. `cd <project-name>/cms && sanity init`
3. Create `.env` from `/web/.env-sample` and add missing keys for sanity. You need `projectId` and `dataset` from `cms/sanity.json`
4. In project root run `yarn deploy:graphql`
5. `yarn start`
6. Once server has started go to `localhost:3000` and fill in required fields for `Company Info` and `Settings > Site Settings`

<!-- **_ GOTCHA _**
TL;DR If you're content is not showing on the page restart the server.

Content types without content won't be added into graphql. This means that you'll need to restart the server if you're adding content to a
content type which previously did not have content. -->

### 📚Docs

- [Frontend](./web/README.md)
- [Backend](./cms/README.md)

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
