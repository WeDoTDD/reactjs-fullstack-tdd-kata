# reactjs-fullstack-tdd-kata
## Description
This Kata is set up initially to stretch your skills by working with React Hooks, GraphQL, and Test Driven Development.

- If you prefer something other than GraphQL, well you forked it, do whatever you want!
    - *you can still use [supertest](https://github.com/visionmedia/supertest) to drive outside tests for REST or other APIs*
- I will be adding more to this, check out the [TODOs](https://github.com/dschinkel/reactjs-fullstack-tdd-kata/projects/1)

## 🪛 Setup
- Run `yarn` - install npm modules
- Run *tests*: scripts are in package.json, look there

#### Note:
- No, **TypeScript** is _not_ setup, this is a simple kata.  Add that setup yourself 😎
- **_If you're ever stuck on this Kata_**, feel free to Join the [WeDoTDD.com Slack](https://join.slack.com/t/wedotdd/shared_invite/zt-ladr0ati-rD4bNNEx_Uu1v0pZsxZDNQ) and well give you some pointers on it!

#### See it in action *(not required for tests)*
- Run *GraphQL Service*: `yarn start service`
- Run *front-end*: `yarn start` 
    - uses [webpack dev server](https://webpack.js.org/configuration/dev-server), and should automatically fire up the browser for you!
    - you will _not_ see a build folder, it's in-memory.  If you really want to see a build folder show up, you can add `writeToDisk: true` under the `devServer` section
    
## Tests
- You can use [React Testing Library](https://testing-library.com) or a newer, better lib called [isolate-components](https://www.npmjs.com/package/isolate-components)
  - Note: Will be adding [enzyme](https://enzymejs.github.io/enzyme) examples soon
- Testing frameworks already setup for you [mocha](https://mochajs.org), [chai](https://www.chaijs.com), and [supertest](https://github.com/visionmedia/supertest)

####Other
- Initial **server-side** spec for "Hello World" is directly testing the service contract

  - Tests are isolated & headless
    - So there no need to run real the thing just to write and run your tests
      - no need to run the graphQL service to run tests.
      - front-end tests do not rely on running the site or on webdriver

## Kata Features for "Coffee Roasters Website"
Implement the following full-stack features.  *If you don't like Coffee, tough luck!*

#### 🖥 Technical Requirements:
- Front-end should call the backend to get the data
- Implement it with Test Driven Development
- Hint: You can copy the feature names below, and literally use them as your very outside test names!

### 📜 End-to-End Slices
#### ~~Feature #1: Shows the text "Hello World"~~   *Done*
#### Feature #2: Shows a list of Coffee Roasters
#### Feature #3: Clears Roasters
#### Feature #4: Filters list by Roaster Name
#### Feature #5: Shows a *paged* list of Coffee Roasters
#### Feature #6: Goes to next page of roasters list
#### Feature #7: Goes to next previous of roasters list
#### Feature #8: Shows Roaster Detail Page
- ability to select a roaster somehow to see their detail page
- detail page should show a couple of roasts (e.g. Dark Roast, Light Roast)
