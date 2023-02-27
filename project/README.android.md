## Android Errors and Its Solutions
1) **Error: Build Failed Issue at RNGestureHandlerPackage**
    > import com.swmansion.gesturehandler.RNGestureHandlerPackage;\
                                   ^
    > symbol:   class RNGestureHandlerPackage\
    > location: package com.swmansion.gesturehandler\
    > Note: /home/nellutlalnrao/Documents/git-projects/rn-projects/rn-basic/android/app/src/debug/\
    >   java/com/projecttest/ReactNativeFlipper.java uses or overrides a deprecated API.\
    > Note: Recompile with -Xlint:deprecation for details.\
    > 1 error\
    **Solution:**
    1) In *MainApplication.java* replace pacakage name from 
        > import com.swmansion.gesturehandler.RNGestureHandlerPackage;\
        *to*
        > import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;\

2) **Error: > Task :react-native-gradle-plugin:compileKotlin**
    **'compileJava' task (current target is 1.8) and 'compileKotlin' task (current target is 11) jvm target compatibility should be set to the same Java version.**
    In **build.gradle** file, add following code -
    > android {\
    >   compileOptions {\
    >       sourceCompatibility JavaVersion.VERSION_11\
    >       targetCompatibility JavaVersion.VERSION_11\
    >   }\
    >   ...
    > }

3) **Configure project :app**
    **Unable to detect AGP versions for included builds. All projects in the build should use the same AGP version. Class name for the included build object: org.gradle.composite.internal.DefaultIncludedBuild$IncludedBuildImpl_Decorated.**
    
