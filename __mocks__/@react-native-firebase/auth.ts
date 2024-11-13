// __mocks__/@react-native-firebase/auth.js
const mockOnAuthStateChanged = jest.fn((callback) => callback(null)); // Mock auth state change

const auth = () => ({
  onAuthStateChanged: mockOnAuthStateChanged,
  signInWithPhoneNumber: jest.fn(() =>
    Promise.resolve({ confirmationResult: 'mockConfirmationResult' }),
  ),
  // Mock other auth functions if necessary
});

export default auth;
