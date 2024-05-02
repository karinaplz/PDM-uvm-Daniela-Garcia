import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* import screen for navigation */
import HomeScreen from './screens/UserList'
import UserDetails from './screens/UserDetails'
import CreateNewUser from './screens/CreateNewUser'

/* create stack for navigation */
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Lista de usuarios' 
          component={HomeScreen} 
          options={{title: 'UVM Lista de usuarios'}}/>
        <Stack.Screen 
          name='User Details'
          component={UserDetails}
          options={{title: 'Ver usuario'}}/>
        <Stack.Screen 
          name='Create New User'
          component={CreateNewUser}
          options={{title: 'Crear usuario'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}