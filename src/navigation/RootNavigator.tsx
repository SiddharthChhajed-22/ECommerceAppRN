import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import { useAuth } from '../hooks/useAuth';
import { RootStackParamList } from './types';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrderListScreen from '../screens/OrderListScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    const { isAuthenticated } = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            {!isAuthenticated ? (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Signup" component={SignupScreen} />

                </>
            )

                : (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                        <Stack.Screen name="Cart" component={CartScreen} />
                        <Stack.Screen name="Checkout" component={CheckoutScreen} />
                        <Stack.Screen name="Orders" component={OrderListScreen} />
                    </>
                )}

        </Stack.Navigator>
    )
}