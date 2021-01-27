# reactjs-fullstack-tdd-kata
ReactJS Hooks with GraphQL kata

## Setup
- `yarn`
- Run *tests*: `yarn test`
    - Tests are using [isolate-components](https://www.npmjs.com/package/isolate-components), [mocha](https://mochajs.org), and [chai](https://www.chaijs.com)
- Run *GraphQL Service*: `yarn start service`
- Run *front-end*: `yarn start` 
    - uses [webpack dev server](https://webpack.js.org/configuration/dev-server), and should automatically fire up the browser for you!
    - you will _not_ see a build folder, it's in-memory.  If you really want to see a build folder show up, you can add `writeToDisk: true` under the `devServer` section
    
## Description
This Kata is set up initially to stretch your skills by working with React Hooks and GraphQL.

Of course, if you don't like React Hooks, you forked it, so use whatever you want (React Classes, Koa, express, Hapi, whatever suites your fancy).  Just note that the [isolate-components](https://github.com/davidmfoley/isolate-components) library which is setup in this repo, is for testing React Hooks specifically.

## Kata Features - ReactJS - Coffee Roasters
Implement the following features and show it in your React App.

#### Technical Requirements:
- Front-end should call the backend to get the data
- Implement it with Test Driven Development
- Hint: You can copy the feature names below, and literally use them as your very outside test names!
- If you don't like Coffee, tough luck

### Features
#### Feature #1: Shows the text "Hello World"
#### Feature #2: Shows a list of Coffee Roasters
#### Feature #3: Ability to Filter list by Roaster Name
#### Feature #4: Ability to reset/clear Roasters
#### Feature #5: Shows a paged list of Roasters
- ability to click and get to next page
- ability to click and get to previous page
#### Feature #6: Shows Roaster Detail Page
- ability to select a roaster somehow to see their detail page
- detail page should show a couple of roasts (e.g. Dark Roast, Light Roast)
