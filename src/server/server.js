const App = require('./api');

const port = 4000;

App.listen(port, () => {
	console.log(`express is listening on port ${port}`);
});
