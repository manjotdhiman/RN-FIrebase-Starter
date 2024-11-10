import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/Login';
import HomeScreen from '../screens/dashboard/home';
const Stack = createStackNavigator();
import {state} from '../state';

function RootNavigator() {
  const user = state.user.useUser();
  console.log('userdata', user);

  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
}
export default RootNavigator;
