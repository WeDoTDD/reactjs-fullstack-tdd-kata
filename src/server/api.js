const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    roasters: String
  },
`);

const root = {
	roasters: async () => 'Hello World',
};

const App = express();
App.options('/graphql');
App.use(cors());
App.on('error', (err) => {
	console.log(err);
})
	.use(
		'/graphql',
		graphqlHTTP({
			schema,
			rootValue: root,
			graphiql: true,
		})
	);

module.exports = App;
