import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import DrawerNavigation from './src/components/Navigation/Drawer/DrawerNavigation';
import WelcomeScreen from './src/views/WelcomeScreen';
import SettingsScreen from './src/views/SettingsScreen';
import AppColorTemplate from './src/styles/ColorConfig';
import StackNavigation from './src/components/Navigation/Stack/index';
import { StackMenu } from './AppMenu';

export default function App() {
  return (
    <NavigationContainer>
    <StackNavigation stackMenu={StackMenu} headerShown={false} />
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
