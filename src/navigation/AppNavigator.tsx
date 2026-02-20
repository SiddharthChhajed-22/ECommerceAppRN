import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { CheckoutScreen } from '../screens/CheckoutScreen';

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Checkout: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => !!state.auth.token,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Main' : 'Auth'}
        screenOptions={{ headerShown: false }}
      >
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Main" component={MainNavigator} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
