module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["path/to/**/*.jsx"],
};

export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
};
