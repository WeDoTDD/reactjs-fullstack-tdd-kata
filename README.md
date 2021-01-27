# reactjs-fullstack-tdd-kata
ReactJS Hooks with GraphQL kata

## 🪛 Setup
- Run `yarn` - install npm modules
- Run *tests*: `yarn test`
- Run *GraphQL Service*: `yarn start service`
- Run *front-end*: `yarn start` 
    - uses [webpack dev server](https://webpack.js.org/configuration/dev-server), and should automatically fire up the browser for you!
    - you will _not_ see a build folder, it's in-memory.  If you really want to see a build folder show up, you can add `writeToDisk: true` under the `devServer` section
    
## Description
This Kata is set up initially to stretch your skills by working with React Hooks and GraphQL.

Of course, if you don't like React Hooks, you forked it, so use whatever you want (React Classes, Koa, express, Hapi, whatever suites your fancy).  Just note that the [isolate-components](https://github.com/davidmfoley/isolate-components) library which is setup in this repo, is for testing React Hooks specifically.

## Tests

- Initial Libraries Used: [isolate-components](https://www.npmjs.com/package/isolate-components), [mocha](https://mochajs.org), [chai](https://www.chaijs.com), and [supertest](https://github.com/visionmedia/supertest)
- [isolate-components](https://www.npmjs.com/package/isolate-components): for those who insist on having mount/render scoped tests, it has the ability to create very focused [integrated tests](https://vimeo.com/80533536).  Instead of mounting the entire tree, you can render specific children in a React tree if desired which is really neat.

## Kata Features - ReactJS - Coffee Roasters
Implement the following full-stack features.

#### 🖥 Technical Requirements:
- Front-end should call the backend to get the data
- Implement it with Test Driven Development
- Hint: You can copy the feature names below, and literally use them as your very outside test names!
- If you don't like Coffee, tough luck

### 📜 Client (front-end) Slices
#### Feature #1: Shows the text "Hello World"
#### Feature #2: Shows a list of Coffee Roasters
#### Feature #3: Ability to Filter list by Roaster Name
#### Feature #4: Ability to reset/clear Roasters
#### Feature #5: Shows a *paged* list of Coffee Roasters
#### Feature #6: Ability to go to next page
#### Feature #7: Ability to go to previous page
#### Feature #8: Shows Roaster Detail Page
- ability to select a roaster somehow to see their detail page
- detail page should show a couple of roasts (e.g. Dark Roast, Light Roast)
