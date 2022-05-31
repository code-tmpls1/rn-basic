import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import TabNavigation from './src/components/Navigation/Tab/TabNavigation';
import DrawerNavigation from './src/components/Navigation/Drawer/DrawerNavigation';
import WelcomeScreen from './src/views/WelcomeScreen';
import SettingsScreen from './src/views/SettingsScreen';
import AppColorTemplate from './src/styles/ColorConfig';
import { Scanner } from './src/components/Scanner/Scanner';

export default function App() {
  return (
    <NavigationContainer>
    <TabNavigation tabMenu={[{ name:'Tab1', icon:'account', badge:3, component: DrawerNavigation },
                            { name:'Tab2', icon:'bell', component:WelcomeScreen },
                            { name:'Tab3', icon:'account', component:SettingsScreen },
                            { name:'Tab4', icon:'bell', component:Scanner },
                            { name:'Tab5', icon:'account', component:SettingsScreen }]} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
