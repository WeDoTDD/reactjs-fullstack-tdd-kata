import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

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

export default App;
