const dom = require("jsdom"),
	{ JSDOM } = dom;

const globalAny: any = global;
globalAny.window = new JSDOM(`<!doctype html><html><body id='root'></body></html>`, { url: "http://localhost" }).window;
globalAny.document = global.window.document;
