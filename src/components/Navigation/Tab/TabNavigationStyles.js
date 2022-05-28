import { StyleSheet } from "react-native";
import AppColorTemplate from './../../../styles/ColorConfig';

const TabNavigationStyles = StyleSheet.create({
 tabBarLabelStyle: { color: AppColorTemplate.GLOBAL_TMPL_COLOR2, fontSize:14, fontWeight:'bold' },
 tabBarBadgeStyle: { marginLeft:4, padding:2, color: AppColorTemplate.GLOBAL_TMPL_COLOR3, backgroundColor: AppColorTemplate.GLOBAL_TMPL_COLOR2 },
 tabBarBadgeActiveStyle: { marginLeft:4, padding:2, backgroundColor: AppColorTemplate.GLOBAL_TMPL_COLOR1 }
});

export default TabNavigationStyles;