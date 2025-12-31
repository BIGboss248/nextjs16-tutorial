
# This repository is for me to learn some nextJS hope you can learn some too :)

## Create nextJS project

```console
npx create-next-app@version .
```

Enable fast compile

```TypeScript
experimental:{
    turbopackFileSystemCacheForDev: true,
  }

```

## Project structure

### tsconfig.json

file to configure typescript compiler

### postcss.config.mjs

Tool to process CSS with diffrent plugins

### package-lock.json

saving project versions and dependencies

### package.json

dependencies and dev dependencies among info about your package

### next.config.ts

Enables changing settings about your project

### [public folder](./public/)

Where static assets are stored

### [node modules](./node_modules)

where package dependencies are stored

### [app](./app/)

where we store app codes

## Home page

code for pages are stored in page.tsx files you can use `rafce` to use code snippet to create a boilerplate to start coding from that

## layout.tsx

Setting that will be applied to all pages

## Serverside vs client side

The idea about a server side component is that the component is rendered on server and sent to client improving SEO and performance

### Where to use client side component

by default all the components are server side untill specifed by `'use client'` directive to the top of the tsx file
A good rule is to make a component client side if compiler throws an error

## Install babel plugin

```console
npm install babel-plugin-react-compiler@latest
```

in next.config.ts set reactCompiler to true
