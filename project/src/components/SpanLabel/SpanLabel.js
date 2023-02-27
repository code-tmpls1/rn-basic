import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultStyles from './../../styles/ColorStyles';

const SpanLabel = ({ text, align, className }) => {
 let alignItems = (align==='right')?'flex-end':(align==='center')?'center':(align==='left')?'flex-start':'flex-start';
  className = (className!==undefined)?className:'default';
 return (<View style={[styles.spanLabelView,{ alignItems:alignItems }]}>
 <Text style={[styles.spanLabelText, DefaultStyles[className]]}>{text}</Text>
</View>);
};


const styles = StyleSheet.create({ 
 spanLabelView:{ padding:2 },
 spanLabelText:{ marginBottom:8, paddingTop:3, paddingBottom:3, paddingLeft:8, paddingRight:8, fontWeight:'bold', borderRadius:4 },
 success:{ color:'#fff', backgroundColor:'green' }
});

export default SpanLabel;