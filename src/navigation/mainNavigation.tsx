import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import registerScreen from '../screens/registerScreen';
import detailsScreen from '../screens/detailsScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="registerScreen"
          component={registerScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="detailsScreen"
          component={detailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
