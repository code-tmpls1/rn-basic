import React from "react";
import { Text, View , TouchableOpacity, TouchableHighlight, Vibration} from 'react-native';
import PageHeader from './../components/Header/PageHeader';
import { Avatar, Title, Drawer, Caption } from 'react-native-paper';
import { Row, Col } from 'react-native-responsive-grid-system';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppColorTemplate from './../styles/ColorConfig';
import Button from './../components/Button/Button';
import Scanner from './../components/Scanner/Scanner';
import { NavigationContext } from '@react-navigation/native';


const ProfileHeader = (props) => {

  const navigation = React.useContext(NavigationContext);

 return (<View style={{ backgroundColor:'#fff', padding:6, borderBottomWidth:1, borderColor:'#ddd' }}>
 <Row>
   <Col xs={2} sm={2} md={2} lg={2}>
     <View>
       <TouchableOpacity onPress={()=>{ navigation.goBack() }} >
         <MaterialIcons name="arrow-back" size={32} />
       </TouchableOpacity>
     </View>
   </Col>
   <Col xs={3} sm={3} md={3} lg={3}>
     <View  style={{ marginTop:15, marginBottom:15 }}>
     <Avatar.Image 
               source={{uri: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Prime_Minister_Modi_in_July_2021.jpg" }} 
               size={100} />
     </View>
   </Col>
   <Col xs={7} sm={7} md={7} lg={7}>
     <View  style={{ marginTop:22, marginLeft:15 }}>

       <Text style={{ fontWeight:'bold', fontSize:18 }}>Narendra Modi</Text>
       <Text style={{ lineHeight:22, marginTop:5, fontWeight:'600', fontSize:14, color:'#999', fontStyle: 'italic' }}>
         "It is a Short Description about the Person who is flexibile to talk speak and write in a Short Notes in wondering the things ..."</Text>
     </View>
     <TouchableOpacity activeOpacity={0.8} onPress={()=>{ Vibration.vibrate(2000);navigation.navigate('Scanner') }} >
     <Button title="Follow me" />
     </TouchableOpacity>
   </Col>
 </Row>
</View>
);
};

const SettingsScreen = (props) => {
    return (
      <>
      {/*<PageHeader isBorder={false} {...props} />*/}
      <ProfileHeader {...props}/>
      
      </>
    );
}

export default SettingsScreen;