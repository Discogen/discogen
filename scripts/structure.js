const shell = require("shelljs");
const { configjs } = require("../code/config");
const { createFileWithUrl } = require("./createFile");

module.exports = {
	folderStructure(dirname, prefix, token) {
		shell.mkdir(dirname);
		shell.cd(dirname);
		shell.mkdir("commands");
		configjs(prefix, token);
		createFileWithUrl(
			"index.js",
			"https://raw.githubusercontent.com/Discogen/discogen-scripts/main/index/index1.js"
		);
		createFileWithUrl(
			"commands/ping.js",
			"https://raw.githubusercontent.com/Discogen/discogen-scripts/main/commands/ping.js"
		);
	},
};
