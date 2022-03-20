import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninScreen from '../screens/SigninScreen/SigninScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SigninScreen}
        />
        <RootStack.Screen name="SignUp" component={SignupScreen} />
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
