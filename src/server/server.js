
require('dotenv/config');
const App = require('./api');
const port = process.env.PORT || 4000;


App.listen(port, () => {
	console.log(`express is listening on port ${port}`);
});
