module.exports = {

    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/app/$1',
      },
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.css$": "jest-css-modules-transform",
    },
  };
  