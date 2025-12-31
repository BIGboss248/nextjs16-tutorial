
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

## Routing

NextJS dose directory based routing meaning to create a new route create a new folder in /app directory and add a page.tsx the function that has 'export default' will return the page contents

### Dynamic routing

Some times we need the route to be generated based on our program for example when we want to veiw user details we want to navigate to website/username to view users details for this we create routes enclosed in square brackets [] and place the parameter inside those brackets for our example we create a folder named `[username]` then in page funciton we get the user name via params

```TypeScript
const User = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <div>User{id}</div>
    )
}

export default User
```
