import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import WelcomeScreen from './../../../views/WelcomeScreen';
import SettingsScreen from './../../../views/SettingsScreen';

const Drawer = createDrawerNavigator();

const drawerInfo = { 
  user:{ displayName:"Anup Chakravarthi",
         image:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Prime_Minister_Modi_in_July_2021.jpg", 
         accountType:"Party Leader",
         shortDesc:"Location, Locality, State, Country - 501510"
       },
  menu:[{ name:'Home', icon:'home-outline', label:'Display Menu1', component: WelcomeScreen },
        { name:'Drawer2', icon:'account-outline', label:'Display Menu2',  component: SettingsScreen },
        { name:'Drawer3', icon:'account-outline', label:'Display Menu3', component: WelcomeScreen }]};

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home" 
      drawerContent={props=><DrawerContent drawerInfo={drawerInfo} {...props}/>}
      drawerStyle={{
        backgroundColor: '#eee',
        width: 240,
      }}
      screenOptions={{ headerShown:false, activeTintColor:'#000',activeBackgroundColor:'#eee'}}
      >
        {drawerInfo.menu.map((drawer)=>{
          return <Drawer.Screen key={drawer.name} name={drawer.name} component={drawer.component} />
        })}
    </Drawer.Navigator>
  );
}