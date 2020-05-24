const common = [
    "tests/features/**/*.feature", // Specify our feature files
    "--require tests/steps/**/*.js", // Load step definitions
    "--format progress-bar", // Load custom formatter
    "--format node_modules/cucumber-pretty", // Load custom formatter
].join(" ");

module.exports = {
    default: common,
};
