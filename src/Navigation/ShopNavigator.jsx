import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, ProductsScreen, ProductScreen } from '../screens';
import { colors } from '../constants/themes/colors';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    const config = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshoortClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };

    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.whiteText,
            }}>
            <Stack.Screen
                name="Categories"
                options={{ headerShown: true }}
                component={CategoriesScreen}
            />
            <Stack.Screen
                name="Products"
                component={ProductsScreen}
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
            <Stack.Screen
                name="Product"
                component={ProductScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    headerBackTitle: 'Back',
                })}
            />
        </Stack.Navigator>
    );
};

export default ShopNavigator;
