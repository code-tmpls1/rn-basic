import { StyleSheet } from 'react-native';
import AppColorTemplate from './../../../styles/ColorConfig';

const PageHeaderStyles = StyleSheet.create({
 headerView:{ backgroundColor:'#fff', padding:3 },
 headerBorderView:{ borderBottomWidth:1, borderColor:'#ddd' },
 headerArrowView:{ paddingLeft:5, paddingBottom:4, paddingTop:2 },
 headerIcons:{ color:AppColorTemplate.GLOBAL_TMPL_COLOR1_MAX },
});

export default PageHeaderStyles;