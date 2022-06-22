# Web Monorepo

A monorepo containing the project folders of our web projects.

## /www

Homepage and blog built using Astro.

Install with

```bash
cd ./www
yarn
```

Start dev environment with

```bash
yarn dev
```

## /cms

Content management system built using Netlify CMS. CMS outputs to `/content` directory.

Start dev environment with

```
cd ./cms
# npm i -g http-server
http-server
```

## /content

Static content directory shared between multiple web projects.

## /core-components

Component library.

### components

Folders for each component. Be sure to add export to the `index.js` file after you create a component. This makes it easier to import all components at once if needed.

### demo

```
npm i
npm run dev
```
The demo should include examples of the core-components
