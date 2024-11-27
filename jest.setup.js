import '@testing-library/react-native/extend-expect';

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-screens', () => {
  return {
    enableScreens: jest.fn(),
    Screen: jest.fn(({ children }) => children),
    ScreenContainer: jest.fn(({ children }) => children),
  };
});
