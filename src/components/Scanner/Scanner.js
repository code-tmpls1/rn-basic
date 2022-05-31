import React, {
    AppRegistry,
    Component, 
  } from 'react-native';
  import { useState } from "react";
  import BarcodeScanner from 'react-native-scan-barcode';

export  const Scanner = (props) =>{
    const [torchMode, setTorchMode ] = useState('off');
    const [cameraType, setCameraType ] = useState('back');

    const  barcodeReceived = (e) => {
        console.log('Barcode: ' + e.data);
        console.log('Type: ' + e.type);
    }

    return (
        <BarcodeScanner
          onBarCodeRead={barcodeReceived}
          style={{ flex: 1 }}
          torchMode={torchMode}
          cameraType={cameraType}
        />
    );
  }

AppRegistry.registerComponent('Scanner', () => Scanner);;