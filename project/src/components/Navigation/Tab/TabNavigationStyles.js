import { StyleSheet } from "react-native";
import AppColorTemplate from './../../../styles/ColorConfig';

const TabNavigationStyles = StyleSheet.create({
 tabBarLabelStyle: { color: AppColorTemplate.GLOBAL_TMPL_COLOR2_MAX, fontSize:14, fontWeight:'bold' },
 tabBarBadgeStyle: { marginLeft:4, padding:2, color: AppColorTemplate.GLOBAL_TMPL_COLOR2_MED, backgroundColor: AppColorTemplate.GLOBAL_TMPL_COLOR2_MIN },
 tabBarBadgeActiveStyle: { marginLeft:4, padding:2, backgroundColor: AppColorTemplate.GLOBAL_TMPL_COLOR1_MAX }
});

export default TabNavigationStyles;