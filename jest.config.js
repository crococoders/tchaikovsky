module.exports = {
  roots: ["<rootDir>/app"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/|/(__tests__)/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  //Ignoring import 'styles.scss'
  moduleNameMapper: { "\\.(css|less|scss)$": "<rootDir>/static/styles/__mocks__/styleMock.ts" },

  // Setup Enzyme
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
};
