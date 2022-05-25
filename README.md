# rn-basic

## Setups involved in setting up the Project
1) Set Global React Native CLI with the following command
    > npm install -g --force react-native-cli

2) For Development Purpose - Use following Command
    > expo start

3) For Development Purpose - Android APK Build
    ("android" folder in the project, by default provides "debug.keystore" and its configuration 
    at "build.gradle" under "android/app" folder)

    a) Create "local.properties" file under "android" folder and add following parameter
        > sdk.dir=<ANDROID_SDK_ROOT>

    b) Create "assets" folder under "android/app/src/main/" and execute following command from
        Terminal (Project LOcation) :
        > react-native bundle --platform android --dev false --entry-file index.js --bundle-output 
        > android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
        (This creates "index.android.bundle" file under "assets" folder)

4) Generate APK FIle
    > cd android
    > ./gradlew assembleDebug


