import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Orders } from '../screens';
import { colors } from '../constants/themes/colors';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.whiteText,
            }}>
            <Stack.Screen name="Orders" options={{ headerShown: true }} component={Orders} />
        </Stack.Navigator>
    );
};

export default OrdersNavigator;
