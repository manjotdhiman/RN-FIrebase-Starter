const React = require('react');
const { View } = require('react-native');

const mockGestureHandler = {
  GestureHandlerRootView: ({ children }) => <View>{children}</View>,
  PanGestureHandler: jest.fn(({ children }) => children),
  TapGestureHandler: jest.fn(({ children }) => children),
  State: {},
  Directions: {},
  // Add other gesture handler mocks as needed
};

module.exports = mockGestureHandler;
