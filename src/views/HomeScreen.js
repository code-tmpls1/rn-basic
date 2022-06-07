import React from 'react';
import { View, Text } from 'react-native';
import TabNavigation from './../components/Navigation/Tab/TabNavigation';
import DrawerNavigation from './../components/Navigation/Drawer/DrawerNavigation';
import WelcomeScreen from './../views/WelcomeScreen';
import SettingsScreen from './../views/SettingsScreen';

export const TabMenu = [{ name:'Tab1', icon:'account', badge:3, component: DrawerNavigation , initialParams:{} },
                        { name:'Tab2', icon:'bell', component:WelcomeScreen },
                        { name:'Tab3', icon:'account', component:SettingsScreen },
                        { name:'Tab4', icon:'bell', component:WelcomeScreen },
                        { name:'Tab5', icon:'account', component:SettingsScreen }]

const HomeScreen =() => {
    return (<TabNavigation tabMenu={TabMenu} headerShown={false} />);
}

export default HomeScreen;
