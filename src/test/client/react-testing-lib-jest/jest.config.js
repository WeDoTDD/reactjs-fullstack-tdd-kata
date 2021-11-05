module.exports = {
	roots: ['.'],
	verbose: true,
	testRegex: '\\.(spec)\\.js$',
	collectCoverage: false,
	moduleDirectories:[
		'./node_modules'
	],
	reporters: ['jest-silent-reporter'],
	moduleFileExtensions: ['js'],
	testEnvironment: 'node',
	testTimeout: 2000,
};
