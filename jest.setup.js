import '@testing-library/react-native/extend-expect';

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-gesture-handler', () => {
  const actualGestureHandler = jest.requireActual(
    'react-native-gesture-handler',
  );
  return {
    ...actualGestureHandler,
    GestureHandlerRootView: (props) => <div {...props} />,
    PanGestureHandler: (props) => <div {...props} />,
    // mock other gesture components if needed
  };
});
