import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../Screens/Welcmpage/Welcome';
import { Login } from '../Screens/Loginpage/Login';
import { Form } from '../Screens/Form/Form';
export const  Routes= ()=>{
const Stack = createNativeStackNavigator()
    return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={{animation:"slide_from_right"}}name="Welcome"component={Welcome} />
                    <Stack.Screen options={{animation:"slide_from_right"}} name="Form"component={Form} />
                    <Stack.Screen  options={{animation:"slide_from_right"}}name="Login"component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
    )
} 