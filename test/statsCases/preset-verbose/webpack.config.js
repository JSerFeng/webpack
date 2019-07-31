const LogTestPlugin = require("../../helpers/LogTestPlugin");

module.exports = {
	mode: "production",
	entry: "./index",
	profile: true,
	stats: "verbose",
	plugins: [new LogTestPlugin()]
};
