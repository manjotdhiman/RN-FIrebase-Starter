// jest.config.js
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional if you have a setup file
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react|react-native|@react-native-community|@storybook|@react-navigation)/',
  ],
  moduleNameMapper: {
    '^\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  globals: {
    'babel-jest': {
      babelConfig: './babel.config.js',
    },
  },
};
