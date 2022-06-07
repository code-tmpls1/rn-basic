import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SpanLabel = ({ text, align, className }) => {
 let alignItems = (align==='right')?'flex-end':(align==='center')?'center':(align==='left')?'flex-start':'flex-start';
  className = (className!==undefined)?className:'default';
 return (<View style={[styles.spanLabelView,{ alignItems:alignItems }]}>
 <Text style={[styles.spanLabelText,styles[className]]}>{text}</Text>
</View>);
};


const styles = StyleSheet.create({ 
 spanLabelView:{ padding:2 },
 spanLabelText:{ marginBottom:8, paddingTop:3, paddingBottom:3, paddingLeft:8, paddingRight:8, fontWeight:'bold', borderRadius:4 },
 success:{ color:'#fff', backgroundColor:'green' },
 successHallow:{ color:'green', borderColor:'green', borderWidth:1 },
 primary:{ color:'#fff', backgroundColor:'#1e08c4' },
 primaryHallow:{ color:'#1e08c4', borderColor:'#1e08c4', borderWidth:1 },
 danger:{ color:'#fff', backgroundColor:'#e71809' },
 dangerHallow:{ color:'#e71809', borderColor:'#e71809', borderWidth:1 },
 warning:{ color:'#fff', backgroundColor:'#b56c01' },
 warningHallow:{ color:'#b56c01', borderColor:'#b56c01', borderWidth:1 },
});

export default SpanLabel;