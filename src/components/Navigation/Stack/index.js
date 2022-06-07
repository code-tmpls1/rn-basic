import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigation = ({ stackMenu, headerShown }) => {
    return (<Stack.Navigator screenOptions={{ headerShown:headerShown }}>
        {stackMenu.map(menu=><Stack.Screen  key={menu.name} name={menu.name} component={menu.component}  />)}
      </Stack.Navigator>);
}

export default StackNavigation;