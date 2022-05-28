import React,{ useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColorTemplate from './../../../styles/ColorConfig';
import TabNavigationStyles from './TabNavigationStyles';

const Tab = createBottomTabNavigator();

const TabNavigation = ({ tabMenu }) => {

  const [ tabBadgeActive, setTabBadgeActive ] = useState("");

  const TabIconProvider = ({ routeName, size, color }) =>{
    let tabInfo = tabMenu.filter((val)=>val.name===routeName);
    return <MaterialCommunityIcons name={tabInfo[0].icon}
            size={size} color={color} />
  };
  
  return (
      <NavigationContainer>
        <Tab.Navigator 
        screenListeners={() => ({
          state: (e) => {
            setTabBadgeActive(tabMenu[e.data.state.index].name);
          },
        })}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            return <TabIconProvider routeName={route.name} size={size} color={color} />
          },
          tabBarInactiveTintColor: AppColorTemplate.GLOBAL_TMPL_COLOR2,
          tabBarActiveTintColor: AppColorTemplate.GLOBAL_TMPL_COLOR1,
        })}>
          {tabMenu.map((tab)=>{
            let tabScreenOptions = {
              tabBarShowLabel:false,
              tabBarLabelStyle: TabNavigationStyles.tabBarLabelStyle,
              tabBarBadgeStyle: (tabBadgeActive===tab.name)?
                TabNavigationStyles.tabBarBadgeActiveStyle:
                TabNavigationStyles.tabBarBadgeStyle
            };
            if(tab.badge!==undefined && tab.badge>0) { 
              tabScreenOptions.tabBarBadge =  tab.badge;
            }
            return (
              <Tab.Screen 
                key={tab.name}
                name={tab.name} 
                component={tab.component} 
                options={tabScreenOptions}/>);
            })}
          </Tab.Navigator>
        </NavigationContainer>
      );
}

export default TabNavigation;