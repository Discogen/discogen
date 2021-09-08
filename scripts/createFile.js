const fs = require("fs");
const fetch = require("node-fetch");

function createFile(filename, content) {
	fs.writeFile(filename, content, (err) => {
		if (err) return console.log(err.message);
	});
}

async function createFileWithUrl(filename, url) {
	const data = await fetch(url);
	const content = await data.text();

	createFile(filename, content);
}

module.exports = { createFile, createFileWithUrl };
