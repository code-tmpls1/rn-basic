import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import TabNavigation from './src/components/Navigation/Tab/TabNavigation';
import HomeScreen from './src/views/HomeScreen';
import SettingsScreen from './src/views/SettingsScreen';

export default function App() {
  return (
    <TabNavigation tabMenu={[{ name:'Tab1', icon:'account', badge:3, component: HomeScreen },
                            { name:'Tab2', icon:'bell', component:SettingsScreen },
                            { name:'Tab3', icon:'account', component:SettingsScreen },
                            { name:'Tab4', icon:'bell', component:SettingsScreen },
                            { name:'Tab5', icon:'account', component:SettingsScreen }]} />
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
