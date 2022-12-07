import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Cart } from '../screens';
import { colors } from '../constants/themes/colors';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.whiteText,
            }}>
            <Stack.Screen name="Cart" options={{ headerShown: true }} component={Cart} />
        </Stack.Navigator>
    );
};

export default CartNavigator;
