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
