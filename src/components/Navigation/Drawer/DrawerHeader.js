import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableOpacity } from 'react-native';
import { Row, Col } from 'react-native-responsive-grid-system';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppColorTemplate from './../../../styles/ColorConfig';
import { Searchbar } from 'react-native-paper';
import DrawerStyles from './DrawerStyles';

const DrawerHeader = (props) => {
    const [ isSearchView, setIsSearchView ] = useState(false);

    const SearchSubmit = () => {
      setIsSearchView(!isSearchView);
    };
  
    const SearchView = () => {
  
      return (<View style={DrawerStyles.searchHeaderView}>
         <Searchbar
        placeholder="Search" 
        style={{ height:36,color: AppColorTemplate.GLOBAL_TMPL_COLOR1_MAX }}
        inputStyle={{ color: AppColorTemplate.GLOBAL_TMPL_COLOR1_MAX }}
        icon={() => <MaterialIcons name="search" size={18} color={AppColorTemplate.GLOBAL_TMPL_COLOR1_MAX}/>}
        onIconPress={SearchSubmit} 
        onSubmitEditing={SearchSubmit} />
        </View>
      );
    }
  
    const HeaderView = ({ width, height, logo}) => {
      return (<View style={DrawerStyles.drawerHeaderView}>
        <Row>
          <Col xs={2} sm={2} md={2} lg={2}>
          <View style={DrawerStyles.drawerHamburgerView}>
            <TouchableOpacity onPress={()=>{ props.navigation.toggleDrawer(); }} >
              <MaterialIcons name="menu-open" style={DrawerStyles.headerIcons} size={36} />
            </TouchableOpacity>
            </View>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8}>
            <View style={DrawerStyles.logoImageView}>
              <Image style={{ width:width,height:height }} source={{uri:logo}} />
            </View>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2}>
            <View style={DrawerStyles.searchIconView}>
            <TouchableOpacity onPress={()=>{ setIsSearchView(!isSearchView); }} >
              <MaterialIcons name="search" style={DrawerStyles.headerIcons} size={26} />
            </TouchableOpacity>
            </View>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            {isSearchView && <SearchView />}
          </Col>
          </Row>
        </View>);
    }
      return (<>
        <HeaderView width={80} height={22} logo={"https://seeklogo.com/images/P/purple-logo-D91C4B8226-seeklogo.com.png"} />
        <StatusBar backgroundColor={AppColorTemplate.GLOBAL_TMPL_COLOR1_MIN} translucent={false}  />
      </>
      );
};

export default DrawerHeader;