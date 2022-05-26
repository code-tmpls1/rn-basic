# rn-basic

## Setups involved in setting up the Project
1) Set Global React Native CLI with the following command
    > npm install -g --force react-native-cli

2) For Development Purpose - Use following Command
    > expo start

3) For Development Purpose - Android APK Build
    ("android" folder in the project, by default provides "debug.keystore" and its configuration 
    at "build.gradle" under "android/app" folder)

    1)  Create "local.properties" file under "android" folder and add following parameter
        > sdk.dir=<ANDROID_SDK_ROOT>

    2)  Create "assets" folder under "android/app/src/main/" and execute following command from
        Terminal (Project Location) :
        > react-native bundle --platform android --dev false --entry-file index.js --bundle-output 
        > android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

        (This creates "index.android.bundle" file under "assets" folder)

4) Generate APK FIle
    > cd android
    > ./gradlew assembleDebug


## Ubuntu OS : Metro Bundler Network/Firewall Issues - Fix:

1) Allow the Port 19000 or 19001 to access over the Network
    > sudo ufw allow 19000/tcp
    > sudo ufw allow 19001/tcp

2) To see the Status of Allowed Ports - Use the following Commands 
    > sudo ufw status verbose

## Project Structure:

1) **assets:** It is used to store images, vectors, fonts, etc.
2) **src:** Application's Main Code Container
    1) **components:** The Folder that stores common Components that are used in the App.
    2) **constants:** It contains the Constants
    3) **routes:** It contains Navigators
    4) **redux:** It contains reducers and store
    5) **views:** It contains all your Application Screens / Features
    6) **helper:** Common Api Controller
    7) **utils:** It contains Reusable Utility Logics
3) **App.js:** Main Components that starts the Application
4) **index.js:** Entry point of the Application.
5) Modify the environment variable files in root folder **(.env)**

## Dependency Modules
1) **React Navigation:** 

    1) Install following Dependencies:
        > npm install @react-navigation/native\
        > npm install react-native-screens react-native-safe-area-context\
        > npx pod-install ios

    2) Edit "MainActivity.java" as follows:
        > import android.os.Bundle;\
        > @Override\
        > protected void onCreate(Bundle savedInstanceState) {\
        > super.onCreate(null);
        > }
    3) Wrapping your app in NavigationContainer
        > import * as React from 'react';\
        > import { NavigationContainer } from '@react-navigation/native';\
        > export default function App() {\
        > return (\
        > &lt;NavigationContainer&gt;\
        > {/* Rest of your app code */}\
        > &lt;/NavigationContainer&gt;\
        > );\
        > }
    
