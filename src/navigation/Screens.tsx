import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../components/Auth/SignIn';
import Landing from '../components/Landing/Landing';
import Tabs from './Tabs';
import { RootStackParamListScreens } from './types';

const Stack = createNativeStackNavigator<RootStackParamListScreens>();

function Screens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* If logged in */}
      <Stack.Screen name="Main" component={Tabs} />
      {/* Otherwise */}
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export default Screens;
