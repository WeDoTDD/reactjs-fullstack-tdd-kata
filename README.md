# reactjs-fullstack-tdd-kata

This kata is meant for _anyone_ out there in the world who wants to try it.

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

## Groups working on this Kata
If you are a pair or mob working on this kata and need to push changes up to this repo for collaboration, please do the following:

**`Do not commit changes to main/master`. Instead:**

  - First DM Dave Schinkel in [WeDoTDD Slack](https://join.slack.com/t/wedotdd/shared_invite/zt-oh1gskuq-pNYBUOH4ySSdXyP9FfoP8g) OR [add an issue into this Repo](https://github.com/WeDoTDD/reactjs-fullstack-tdd-kata/issues) asking for access. Provide github handles of everyone who will be working on the kata form your group so that Dave can add you all as collaborators to this repo.  
    - This will allow your group to create your own feature branch to work off of
  - Create a `new branch` for your `team/group/mob/whatever` and name it what you like.  **Then work off that branch together**

## Finally:
- Run `yarn` (install node modules)
- **Next, be sure you can run the tests**: test scripts are in `package.json`, look there, try them

**TypeScript** is _not_ setup, this is a simple kata

# 🧪 Tests
**The following frameworks and libs are already setup for you and ready to go**: [mocha](https://mochajs.org), [chai](https://www.chaijs.com), [jest](https://jestjs.io/), [supertest](https://github.com/visionmedia/supertest), [React Testing Library](https://testing-library.com), [isolate-components](https://www.npmjs.com/package/isolate-components)

Out-of-box Hello World tests demonstrate `Arrange` / `Act` / `Assert` test partitioning pattern

### Client Tests
- For React Component tests, you can use [React Testing Library](https://testing-library.com) or a newer, better lib called [isolate-react](https://www.npmjs.com/package/isolate-react) coupled with either [jest](https://jestjs.io/) or [mocha](https://mochajs.org)
- For lower-level micro tests (below the components), you can use plain [mocha](https://mochajs.org) or [jest](https://jestjs.io/)
- these tests _**do not**_ rely on running the actual site (webpack)

#### Running
Depending on what test libs, frameworks you chose that are already setup for you, you'd run one of the following:

tests that use **isolate-react + mocha**: `yarn test-isolateComponents-mocha`

tests that use **isolate-react + jest**: _coming soon_

tests that use React Testing Libary + Jest: `yarn test-rtl-jest`

tests that use React Testing Libary + mocha: _comming soon_

### Server Tests
- Initial **server-side** spec for "Hello World" is directly testing the service contract (it is not running the GraphQL service, doesn't need to)
    - Example server-side tests provided are isolated & headless; to run tests, _there is no need to run the real service or website_

# 🏃🏻‍♀️ Run the Website (optional)
You will need two separate terminal sessions running.  One to run graphql and one to run the website.

### Perform the following steps: 
1. Run ***GraphQL Service***: `yarn start-service`
    - Don't forget about the `GraphiQL tool`: go to [http://localhost:4000/graphql](http://localhost:4000/graphql)
2. Run ***front-end***: `yarn start`, then go to [http://localhost:8080](http://localhost:8080)
    - Note: uses [webpack dev server](https://webpack.js.org/configuration/dev-server)
    - GraphQL Service ☝ (step 1)️ must be running
    
# ☕️ The Kata
*If you don't like Coffee, tough luck!* 😭

## 📃 Description
 🤦‍♀️ It's the typical sprint: Charlotte, a business stakeholder has asked you once again to _rush_ some new features out to the new "Coffee Roasters" website, a place where people can find the very best roasters on the planet.  
 
🚨 She has stated with a strong voice, that "We are Agile" which means the world will end as we know it if these features aren't out in 2 days.  She told you that "this should be easy", that you must work weekends,  that you must "have a sense of urgency", and "do whatever it takes" or you are fired! 😱 🙀

You know however, **that for many reasons, it's better to go well, never rush**.  And you realize that learning and applying TDD will help you along the way.

You are a Software Artisan who cares about producing high quality software; you are here to continually improve and practice [Test Driven Development](http://wiki.c2.com/?TestDrivenDevelopment), [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882), [SOLID](https://en.wikipedia.org/wiki/SOLID), and the [4 Rules of Simple Design](https://martinfowler.com/bliki/BeckDesignRules.html).

### **So relax, get some coffee, have fun and Good Luck!**


## 🖥 Requirements
1. **Implement the [following features](#feature-slices) below** using disciplined [Test Driven Development](http://wiki.c2.com/?TestDrivenDevelopment)
   - Front-end should call the backend to get the data **-OR-** implement the front-end without a real backend first (use test data and [stubs](https://martinfowler.com/articles/mocksArentStubs.html) to provide data to the front-end (client))

## 🖥 TDD Tips
While doing this kata, keep these in mind:

- Use the feature names below as good names for your overarching test describes
- Keep your tests `super small` in behavioral scope
- One feature will require `more than just one test` to implement that feature
- Write tests that drive behavior for both `happy` and `sad` paths

## 📜 Feature Slices
You are to implement the following with TDD:

#### ~~Feature #1: Show "Hello World"~~   `Done for you`
#### `Feature #2`: Show a list of Coffee Roasters
#### `Feature #3`: Clear Roasters
#### `Feature #4`: Show Roaster Details
#### `Feature #5`: Filter list by Roaster Name
#### `Feature #6`: Show a *paged* list of Coffee Roasters
#### `Feature #7`: Go to next paged list of roasters
#### `Feature #8`: Go to previous paged list of roasters list

- ability to select a roaster somehow to see their detail page
- detail page should show some basic info on a couple of roasts (e.g. Dark Roast, Light Roast)

### 🪛 Helpful Code Resources
_Coming soon!_
