import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AdminScreen from '../../Admin/AdminScreen';
import AdminLogin from '../../Admin/AdminLogin';
import AdminBook from '../../Admin/AdminBook';
import AdminBookUpdate from '../../Admin/AdminBookUpdate';



 const Stack = createStackNavigator(); 
const AuthStack = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    isAppFirstLaunched != null && (
       
        <Stack.Navigator screenOptions={{headerShown: false}} >
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="AdminLogin" component={AdminLogin} />
          <Stack.Screen name="AdminScreen" component={AdminScreen} />
          <Stack.Screen name="AdminBook" component={AdminBook} />
          <Stack.Screen name="AdminBookUpdate" component={AdminBookUpdate} />
        </Stack.Navigator>
        
    )
  );
};

export default AuthStack;