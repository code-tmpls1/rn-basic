import React from "react";
import { Text, View , TouchableOpacity,} from 'react-native';
import AppColorTemplate from './../../styles/ColorConfig';

const Button = (props) => {
 return (<View style={{ alignItems:'flex-end' }}>  
 <Text style={{ backgroundColor:AppColorTemplate.GLOBAL_TMPL_COLOR1_MAX, color:AppColorTemplate.GLOBAL_TMPL_COLOR2_MED, padding:6, 
   fontWeight:'bold', borderRadius:4, borderBottomWidth:2, borderColor: AppColorTemplate.GLOBAL_TMPL_COLOR2_MED }}>{props.title}</Text>
 </View>);
}

export default Button;