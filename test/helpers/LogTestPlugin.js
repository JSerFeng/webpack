module.exports = class LogTestPlugin {
	constructor(noTraced) {
		this.noTraced = noTraced;
	}
	apply(compiler) {
		const logSome = logger => {
			logger.group("Group");
			if (!this.noTraced) {
				logger.error("Error");
				logger.warn("Warning");
			}
			logger.info("Info");
			logger.log("Log");
			logger.debug("Debug");
			logger.groupCollapsed("Collaped group");
			logger.log("Log inside collapsed group");
			logger.groupEnd();
			logger.log("Log");
			logger.groupEnd();
			logger.log("End");
		};
		compiler.hooks.compilation.tap("LogTestPlugin", compilation => {
			const logger = compilation.getLogger("LogTestPlugin");
			logSome(logger);

			const otherLogger = compilation.getLogger("LogOtherTestPlugin");
			otherLogger.debug("debug message only");
		});
	}
};
