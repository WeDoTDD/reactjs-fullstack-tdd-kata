# 🔴🟢🔵 reactjs-fullstack-tdd-kata

A Kata was created by maker of **[WeDoTDD.com](https://WeDoTDD.com)**: lists companies, teams, software crafters, and coaches who TDD

This kata is meant for **_anyone_** out there in the world who wants to try it.

Take your time to read this.  Don't skim it.

### Check out the [Roadmap here](https://github.com/dschinkel/reactjs-fullstack-tdd-kata/projects/1)

## Support
**_If you're ever stuck on this Kata_**, feel free to **Join the [WeDoTDD.com Slack](https://join.slack.com/t/wedotdd/shared_invite/zt-ladr0ati-rD4bNNEx_Uu1v0pZsxZDNQ)** and we'll give you some pointers on it!

# 📄 Description
This Kata is set up initially to stretch your skills by working with [React Hooks](https://reactjs.org/docs/hooks-intro.html), [GraphQL](https://graphql.org/), and [Test Driven Development](http://wiki.c2.com/?TestDrivenDevelopment).

The following is already setup for you: [mocha](https://mochajs.org), [chai](https://www.chaijs.com), [jest](https://jestjs.io), [supertest](https://github.com/visionmedia/supertest), [React Testing Library](https://testing-library.com), [isolate-components](https://www.npmjs.com/package/isolate-components)

(Will be adding [enzyme](https://enzymejs.github.io/enzyme) examples soon)

## Make this Kata what _you_ want
You don't have to use what's out of the box here.  This kata is setup initially with a few nice things such as a GraphQL service to serve data to the client.

### Don't want GraphQL for server-side? No Problem!
Well you forked it or created your own branch! So you're not stuck with GraphQL.  It's easy enough to do what you want in here...then just do it!  That's part of learning.

**ExpressJS** is already installed, so TDD a REST service or whatever you want!

Either way, you can still use the [supertest](https://github.com/visionmedia/supertest) library (already setup) to test drive the outside tests for the service!

## Individuals working on this Kata
**`Do not commit changes to main/master`. Instead:**
1) If you do not have a github account, create one using your personal email
2) Create a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to enable you to use as a password for github command-line (pushes, forks, etc)
3) `Fork` this repo instead of cloning it, then work on your own fork.

## Groups working on this Kata
If you are a pair or mob working on this kata.

**`Do not commit changes to main/master`. Instead:**

- First DM Dave Schinkel in [WeDoTDD Slack](https://join.slack.com/t/wedotdd/shared_invite/zt-oh1gskuq-pNYBUOH4ySSdXyP9FfoP8g) OR [add an issue into this Repo](https://github.com/WeDoTDD/reactjs-fullstack-tdd-kata/issues) asking for access
    - then, provide github handles of everyone who will be working on the kata from your group so that Dave can add your github accounts as collaborators to this repo
        - This will allow your group to create your own feature branch to work off of
- Create a `new branch` for your `team/group/mob/whatever` and name it what you like.  **Then work off that branch together**

# 🪛 Setup

**TypeScript** is _not_ setup, this is a simple kata

## 💻 Mac:
- Install **Homebrew**
  - run this cmd: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- Install **NodeJS**: `brew install node`
- Install **Yarn**: `brew install yarn`

## 💻 Windows PC:
- Install [**NodeJS**](https://nodejs.org/en/download/) first
- Install **Yarn**
  - `npm install --global yarn`

## Finally:
- Run `yarn` (install node modules)
- **Next, be sure you can run the tests**: test scripts are in `package.json`, look there, try them

# 🧪 Tests
**The following frameworks and libs are already setup for you and ready to go**: [mocha](https://mochajs.org), [chai](https://www.chaijs.com), [jest](https://jestjs.io/), [supertest](https://github.com/visionmedia/supertest), [React Testing Library](https://testing-library.com), [isolate-components](https://www.npmjs.com/package/isolate-components)

Looking at the config of these libs or frameworks will help you understand how to set these up for your own projects.

Out-of-box test cases demonstrate the `Arrange` / `Act` / `Assert` test partitioning pattern

## Client Tests
- For React Component tests, you can use [React Testing Library](https://testing-library.com) or a newer, better lib called [isolate-react](https://www.npmjs.com/package/isolate-react) coupled with either [jest](https://jestjs.io/) or [mocha](https://mochajs.org)
- For lower-level micro tests (below the components), you can use plain [mocha](https://mochajs.org) or [jest](https://jestjs.io)
- these tests _**do not**_ rely on running the actual site (webpack)

### 🧪ADDING _YOUR_ TESTS
️ in this repo, `add your tests under the folder named with framework / lib you want to use`.

### Running
Depending on what test libs, frameworks you chose that are already setup for you, you'd run one of the following:

tests using **[isolate-react](https://www.npmjs.com/package/isolate-react)** + **[mocha](https://mochajs.org)** + **[chai](https://www.chaijs.com)**: `yarn test-isolateComponents-mocha`

tests using **[isolate-react](https://www.npmjs.com/package/isolate-react)** + **[jest](https://jestjs.io)**: _coming soon_

tests using **[React Testing Library](https://testing-library.com)** + **[jest](https://jestjs.io)**: `yarn test-rtl-jest`

tests using **[React Testing Library](https://testing-library.com)** + **[mocha](https://mochajs.org)** + **[chai](https://www.chaijs.com)**: _comming soon_

## Server Tests
- Initial **server-side** spec for "Hello World" is directly testing the service contract (it is not running the GraphQL service, doesn't need to)
    - Example server-side tests provided are isolated & headless; to run tests, _there is no need to run the real service or website_

### Running

`yarn test-server`

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
### 🏃‍♀️🏃🏃‍♂️ It's the typical "Agile" sprint: 

🌩 The sky is falling, and John 🙆‍♂️, a business stakeholder who is very close to obtaining his next career promotion, has asked you once again to _rush_ 🚑 some new features out to the new "Coffee Roasters" website, a place where people can find the very best roasters on the planet.  
 
🚨 He has stated with a strong voice, that "We are Agile" which means the world will end as we know it if these features aren't out in 2 days.  John says Agile says you should be able to deliver things fast, and that fast is all that counts.

He told you he expects "this should be easy", but if you must, please work weekends, that you must "have a sense of urgency", and expect "do whatever it takes team player attitude" or you are fired! 😱 🙀 🖕.  On top of that, he expects no bugs 🐞🪲 to be found.

🔴🟢🔵 

You know however, **that for many reasons, it's better to go well, never rush**.  And you realize that learning and applying TDD will help you along the way.

🔨 You are a Software Artisan who cares about producing high quality software; you are here to continually improve and practice [Test Driven Development](http://wiki.c2.com/?TestDrivenDevelopment), [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882), [SOLID](https://en.wikipedia.org/wiki/SOLID), and the [4 Rules of Simple Design](https://martinfowler.com/bliki/BeckDesignRules.html).

🔴🟢🔵
### **So relax, get some coffee, have fun and Good Luck!**


## 🖥 Requirements

**Implement the [following features](#-coffee-roaster-features) below** using disciplined [Test Driven Development](http://wiki.c2.com/?TestDrivenDevelopment)

**`Option #1`:** Front-end should call the backend to get the data

**-OR-** 

**`Option #2`:** implement the front-end without a real backend first (use test data and [stubs](https://martinfowler.com/articles/mocksArentStubs.html) to provide data to the front-end

## 🖥 TDD Tips
While doing this kata, keep these in mind:

- Use the feature names below as good names for your overarching test describes
- Keep each test you write for a feature `super small` in behavioral scope
- One feature should end up in `more than just one test` written to implement that feature
  - If you're ending up with just one test, it means you're not taking small enough steps during your TDD workflow.  It means you're not practicing evolving design in a lean fashion
- Write tests that drive behavior for both `happy` and `sad` paths
- 

## 📜 COFFEE ROASTER FEATURES
![beans](src/assets/coffee-beans.gif)

## Implement the following features with TDD:

## These are done for you (see examples in repo)
### `Feature #0` (degenerate case): No Roasters
### `Feature #1`: Show "Hello World"

## Finish the rest:
Remember: **small** tests; and each feature should result in **several** small tests
### `Feature #2`: Show a list of Coffee Roasters
### `Feature #3`: Clear Roasters
### `Feature #4`: Show Roaster Details
- ability to select a roaster somehow to see their detail page
- detail page should show some basic info on a couple of roasts (e.g. Dark Roast, Light Roast)
### `Feature #5`: Filter list by Roaster Name
### `Feature #6`: Show a *paged* list of Coffee Roasters
### `Feature #7`: Go to next paged list of roasters
### `Feature #8`: Go to previous paged list of roasters list

## 🪛 Helpful Code Resources
#### Sites
**[WeDoTDD.com](https://WeDoTDD.com)** - companies, teams, software crafters, and coaches who TDD
#### Vids
- [TDD TV](https://www.youtube.com/channel/UCiRBjSlxIlt5URzgHSGhHQA)
#### Tools
- [Mocha](https://mochajs.or)
- [Chai](https://www.chaijs.com)
- [Jest](https://jestjs.io)
- [isolate-react](https://www.npmjs.com/package/isolate-react) - a newer, leaner, simpler, faster React testing lib
- [React Testing Library](https://testing-library.com)
- [Enzyme](https://enzymejs.github.io/enzyme)
- [GraphQL](https://graphql.org)
- [ExpressJS](https://expressjs.com)
- [Koa](https://stackshare.io/koa):  highly recommended over ExpressJS, written by [TJ Holowaychuk](https://github.com/tj), the guy who wrote ExpressJS.  He wrote this to be an improvement over ExpressJS.

#### Books
- [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Test Driven Development: By Exmaple](https://www.amazon.com/Test-Driven-Development-Kent-Beck-ebook/dp/B095SQ9WP4)
- [Refactoring: Improving the Design of Existing Code (2nd Edition)](https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599)


