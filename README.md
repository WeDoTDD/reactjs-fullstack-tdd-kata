# reactjs-fullstack-tdd-kata

## Check out the [Roadmap here](https://github.com/dschinkel/reactjs-fullstack-tdd-kata/projects/1)

## Support
**_If you're ever stuck on this Kata_**, feel free to **Join the [WeDoTDD.com Slack](https://join.slack.com/t/wedotdd/shared_invite/zt-ladr0ati-rD4bNNEx_Uu1v0pZsxZDNQ)** and well give you some pointers on it!

# Description
This Kata is set up initially to stretch your skills by working with [React Hooks](https://reactjs.org/docs/hooks-intro.html), [GraphQL](https://graphql.org/), and [Test Driven Development](http://wiki.c2.com/?TestDrivenDevelopment).

The following is already setup for you: [mocha](https://mochajs.org), [chai](https://www.chaijs.com), [jest](https://jestjs.io/), [supertest](https://github.com/visionmedia/supertest), [React Testing Library](https://testing-library.com), [isolate-components](https://www.npmjs.com/package/isolate-components)

(Will be adding [enzyme](https://enzymejs.github.io/enzyme) examples soon)

### Make this Kata what _you_ want
You don't have to use what's out of the box here

If you prefer something other than GraphQL, well you forked it, test drive a REST service instead!
  - *you can still use [supertest](https://github.com/visionmedia/supertest) to drive outside tests for REST or other APIs*

# 🪛 Setup

## 💻 Mac:
- Install Homebrew (run this cmd from terminal): `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- Install Yarn: `brew install yarn`

## 💻 Windows PC:
- Install yarn somehow 🤣 (you're on your own)

## Finally (from cmd line):
- Run `yarn` (install node modules)
- **Next, be sure you can run the tests**: test scripts are in `package.json`, look there, try them

**TypeScript** is _not_ setup, this is a simple kata

# 🧪 Tests
**The following is already setup for you**: [mocha](https://mochajs.org), [chai](https://www.chaijs.com), [jest](https://jestjs.io/), [supertest](https://github.com/visionmedia/supertest), [React Testing Library](https://testing-library.com), [isolate-components](https://www.npmjs.com/package/isolate-components)

Out-of-box Hello World tests demonstrate `Arrange` / `Act` / `Assert` test partitioning pattern

## Client
- You can use [React Testing Library](https://testing-library.com) or a newer, better lib called [isolate-components](https://www.npmjs.com/package/isolate-components)
- front-end tests **do not** rely on running the actual site (webpack)

## Server
- Initial **server-side** spec for "Hello World" is directly testing the service contract (it is not running the GraphQL service, doesn't need to)
    - Tests are isolated & headless
        - This means to run tests, there no need to run the real service or website


# 🏃🏻‍♀️ Run the Website (optional)
*(not required during TDD)*

You will need two separate terminal sessions running.  One to run graphql and one to run the website.

### Perform the following steps: 
1. Run ***GraphQL Service***: `yarn start-service`
    - Don't forget about the `GraphiQL tool`: go to `http://localhost:4000/graphql`
2. Run ***front-end***: `yarn start` 
    - then go to http://localhost:8080
    - Note: uses [webpack dev server](https://webpack.js.org/configuration/dev-server)
    - GraphQL Service ☝ (step 1)️ must be running
    
# ☕️ The Kata
*If you don't like Coffee, tough luck!* 😭

## 📃 Description
 🤦‍♀️ Charlotte, a business stakeholder has asked you to _rush_ some new features out to the new "Coffee Roasters Website", a place where people can find the very best roasters on the planet.  
 
She has stated that the world will end as we know it if these features aren't out in 2 days.

You know however, **that it's better to go well, not rush**.  And you realize that learning TDD will help you along the way.

You are here to improve your skills with Test Driven Development and Clean Code.

### **Good Luck!**


## 🖥 Requirements
1. Implement the following features below using disciplined [Test Driven Development](http://wiki.c2.com/?TestDrivenDevelopment)
   - Front-end should call the backend to get the data **-OR-** implement the front-end without a backend first (use test data and stubs)
2. `Suggestion`: use the feature names below as good names for your overarching test describes

## 📜 Feature Slices
#### ~~Feature #1: Show "Hello World"~~   `Done for you`
#### `Feature #2`: Show a list of Coffee Roasters
#### `Feature #3`: Clear Roasters
#### `Feature #4`: Filter list by Roaster Name
#### `Feature #5`: Show a *paged* list of Coffee Roasters
#### `Feature #6`: Go to next paged list of roasters
#### `Feature #7`: Go to previous paged list of roasters list
#### `Feature #8`: Show Roaster Details
- ability to select a roaster somehow to see their detail page
- detail page should show some basic info on a couple of roasts (e.g. Dark Roast, Light Roast)
