import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ShopNavigator from './ShopNavigator';
import Tabs from './Tabs';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
};

export default AppNavigator;
