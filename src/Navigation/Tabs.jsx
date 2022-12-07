import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import OrdersNavigator from './OrdersNavigator';
import { colors } from '../constants/themes/colors';

const ButtonTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <ButtonTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Poppins-Light',
                    fontSize: 12,
                },
                tabBarActiveTintColor: colors.blackText,
            }}>
            <ButtonTab.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    title: 'Shop',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={22}
                            color={colors.blackText}
                        />
                    ),
                }}
            />
            <ButtonTab.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'cart' : 'cart-outline'}
                            size={22}
                            color={colors.blackText}
                        />
                    ),
                }}
            />
            <ButtonTab.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options={{
                    title: 'Orders',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'file-tray-full' : 'file-tray-outline'}
                            size={22}
                            color={colors.blackText}
                        />
                    ),
                }}
            />
        </ButtonTab.Navigator>
    );
};

export default Tabs;
