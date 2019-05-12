# airelogic-tech-test

> Aire Logic tech test

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start
```

## Work Completed

In the time allotted I focused on building the front end using nuxt.js, which is a convention based vue.js framework. It can support SSR (server side rendering), and generating static sites. For this test I used nuxt in SPA mode.

The following bullet points were covered:

-  It should be possible to view the list of open bugs, including their titles
- It should be possible to view the detail of individual bugs, including the title the full description, and when it was opened
- It should be possible to create bugs 

I ran out of time adding tests to all pages in the frontend, so unfortunately only the `/bugs` page was covered by unit tests.

The current Vuex store is backed by an in-memory array that would be replaced by Vuex actions and XHR requests when the API is created.

## Difficulties

I had previously not used Nuxt before writing this, previously I have used Vue via the Vue CLI. It took longer than expected learning the conventions of Nuxt and their behaviour. This also applies to Vuetify, the component library used within the project.

## API Backend

Given more time I would have created a .Net core API for storage of the data and made the relevant changes to the frontend.

For the storage of bugs I would have most likely used a SQL database with Dapper as the C# micro-ORM.
