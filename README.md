
# This repository is for me to learn some nextJS hope you can learn some too :)

Source: <https://www.youtube.com/watch?v=I1V9YWqRIeI>

## JS, JSX, TS, TSX what are they?

well we already know with javascript we can change and manipulate data on web pages and we know react is a library allowing us to create webpage elements easier

### JSX

JSX introduced by react allow easier syntax when trying to create elements with react

```jsx
const element = <h1>Hello, world!</h1>;
```

After transpilation, it becomes:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

### TS

A language developed by microsoft that adds static types to javascript allowing developers to catch bugs early typescript will be compiled to javascript to run on browsers

### TSX

baisclly combining jsx and ts together allowing to write react components using jsx and ts together

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

### [global.csss](./app/globals.css)

Set a design for any element you wish to be applied to all elements on that site

## Home page

code for pages are stored in page.tsx files you can use `rafce` to use code snippet to create a react functional component used for home page

## layout.tsx

Setting that will be applied to all pages in and under that subfolder usefull for setting UI elements for all pages like nav bar, footers etc...

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

### Route groups

folder names that are in parantheses are not show in url path this is used for routes grouping for example if you want to change layout for a group of pages you can create a routing group create layout.tsx in it and apply your specific layout

## Error.tsx and global-error.tsx

A client will never see a nextJS compiler error in a site deployed to production in routes not found or when web app breaks the user should be routed to a special page that will show relevent content like inviting user to visit other pages or call support and that page that the user will be routed to is called error.tsx to have a single page for all erros you can add global-error.tsx in app folder unlike layout only the closest error.tsx file to the page.tsx file that throws erros will be shown

## forbidden.tsx

As I guessed will be shown on error 403 messages

## unauthorized.tsx

Will be shown on error 401 messages

## loader.tsx

Page to show when the page loads and the client with slow internet is getting the page

## Data fetching

<!-- TODO The example here thoght I know react well I don't -->

## API routes

In NextJS setting up and API is easy! you just create route.tsx as the api is usually in /api route you can create a folder in /app named api and add route.tsx to it then you can create functions for diffrent API operations

## Caching

3 types of caching:

1. Browser cache
   Save static files localy
2. Server cache
   Store pre rendered pages and API respones
3. Data cache
   Remembers fetched data to avoid repeat requests

### Enable caching

in nextconfig add
    `cacheComponents: true`
here you can also define cache lifetime and other properties

for caching you have to mark what you want to cache with `use cache` directive nextJS will cache the output and use it if inputs have not changed

`use cache` can be defined on file, component or function level `use cache` will:

1. Prerender components at build time
2. Stores them in memory
3. Revalidates them automaticlly every 15 minutes

Cached items can be grouped by `cacheTag(tagname)` to group them together make it easier to invalidate them or you can use `cacheLife(time)` to set a time to invalidate cache

Also you can use `revalidate()` and `revalidateTag()` to revalidate cache

## Metadata

We can use metadata to improve SEO

metadata is how our content is show when shared in internet for example when a link to our site is sent via telegram or twitter

### Config based Metadata

Create a java script object in layout.tsx and export it like bellow

```javascript
export const metadata = {
    title: "Home | Next.js",
    description: "Generated by create next app",
    openGraph: {
        ...openGraphImage,
        title: 'home',
    }
}
```

the nearest metadata to the page will be applied

### Dynamic metadata

Used to show metadata based on the contents of the page done via `export async functiongenerateMetadata({params})`
This will get access to URL params and will return a dynamic object of all these properties

```javascript
return {
title,
description: seoDescription,
other: {
"og:title": title,
"og:description": seoDescription,
"og:image": resource. image,
"twitter:title": title,
"twitter:image": resource.image,
"twitter:description": seoDescription,
},
};
```

## file based metadata

Store relevent metadata in files in the `/app` directory the names have to be recognizeable by nextJS
to see the list of all files check nextJS docs

filebased metadata has priority and will overwrite config based metadata

## [Components](./components/)

This is where components will be stored that we want to reuse across site this means navbars. buttons etc...

## React components

A good source to get cool components to use on websites is [reactbits](https://reactbits.dev/)

## Posthog

Analytics tool to:

1. Track user behaviour
2. See features performance
3. Monitor erros in real time
4. Capture valuable metrics

The idea about adding PostHog early before any future development is to start gathering and analyzing data sooner allowing to analyze and see data regarding each new feature we add

### integrate posthog with nextJS

go to <https://eu.posthog.com> sign in to your account and follow instructions to integrate posthog with platform (nextJS in this case)

**REMEMBER Ublock origin blocks posthog requests disable it during development so posthog works**

## Setup mongoDB

Mongo DB setup is done via mongo atlas database service provided by mongoDB then you can add mongo connection string to your .env file

### Setup database schema

Generally for a backend design architecture you have to ask yourself what a data should do

First we have to see what is the main entity in our app which in this case is an event
This event will have:

1. a description
2. location
3. time and date
4. who is it for
5. organizer
6. picture
7. tags
8. slug(url safe identifier)

How do users interact with events?

they book them then what we need for booking

1. Which event was booked
2. who booked it
3. when the booking was made

