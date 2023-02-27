import React from "react";
import { View, Text } from 'react-native';
import DrawerHeader from './../components/Navigation/Drawer/DrawerHeader';
import { Row, Col } from 'react-native-responsive-grid-system';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-paper';
import SpanLabel from './../components/SpanLabel/SpanLabel';
import Button from './../components/Button/Button';

const WelcomeScreen = (props) => {
  return (<View>
      <DrawerHeader {...props} />

      <View style={{ marginTop:15, marginLeft:15, marginRight:15,  flexWrap:'wrap', flexDirection:'row' }}>
        <SpanLabel text="Success" align="right" className="success" />
        <SpanLabel text="Success Hallow" align="right" className="successHallow" />
        <SpanLabel text="Primary" align="right" className="primary" />
        <SpanLabel text="Primary Hallow" align="right" className="primaryHallow" />
        <SpanLabel text="Danger" align="right" className="danger" />
        <SpanLabel text="Danger Hallow" align="right" className="dangerHallow" />
        <SpanLabel text="Warning" align="right" className="warning" />
        <SpanLabel text="Warning Hallow" align="right" className="warningHallow" />
      </View>

      <View style={{ backgroundColor: 'white', borderColor:'#ccc', borderWidth:1, marginTop:5, marginLeft:15, marginRight:15, paddingRight:15, borderRadius: 8 }}>
        <Row>
          <Col xs={4} sm={4} md={4} lg={4}>

            <View  style={{ flex:1, backgroundColor:'#93e2bb' }}>

              <View style={{ marginBottom:8, alignItems:'flex-start' }}>
                <Text style={{ paddingTop:3, paddingBottom:3, paddingLeft:8, paddingRight:8, color:'#fff', backgroundColor:'green',
              fontWeight:'bold', borderBottomRightRadius:4,borderTopLeftRadius:4 }}>Verified</Text>
              </View>

              <View style={{ alignItems:'center', marginBottom:10 }}>
                <Avatar.Image 
                  source={{uri: 'https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/14/5e2d01291542c-bpfull.jpg' }} 
                  size={75} />
              </View>

            </View>
            
          </Col>

          <Col xs={8} sm={8} md={8} lg={8}>

            <View style={{ marginTop:15, marginBottom:5, paddingBottom:5, alignItems:'center' }}>

              <Text style={{ color:'#555', padding:5, fontSize:18, fontWeight:'600', letterSpacing:0.8  }}>FirstName LastName</Text>
              <Text style={{ lineHeight:23, textAlign:'center', color:'#999', fontSize:16, fontWeight:'400'  }}>
              Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum 
              sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
              </Text>

            </View>
            <View style={{ marginBottom:10 }}>
              <Button icon="" iconLayout="beforeText" title="Connect" className="" />
            </View>

          

            <View>

            </View>

          </Col>
        </Row>

      </View>
      <Text>Output : {JSON.stringify(props?.route?.params?.scanCode)}</Text>
      

  </View>
  );
}

export default WelcomeScreen;