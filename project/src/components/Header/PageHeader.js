import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity } from 'react-native';
import { Row, Col } from 'react-native-responsive-grid-system';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PageHeaderStyles from './PageHeaderStyles';

const PageHeader = (props) => {
 let isBorder = (props.isBorder===undefined)?true:(props.isBorder);
 return (<View style={[PageHeaderStyles.headerView, (isBorder)?PageHeaderStyles.headerBorderView:'']}>
    <Row>
      <Col xs={2} sm={2} md={2} lg={2}>
      <View style={PageHeaderStyles.headerArrowView}>
        <TouchableOpacity onPress={()=>{ props.navigation.goBack() }} >
          <MaterialIcons name="arrow-back" style={PageHeaderStyles.headerIcons} size={32} />
        </TouchableOpacity>
        </View>
      </Col>
      </Row>
      </View>);
};

export default PageHeader;