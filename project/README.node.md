1) **TypeError: null is not an object (evaluating '_default.createNode'), stack: ...**
    Solution: Reason for the cause of this Error is "react-native-animated" package is not installed in the Project.
        1) Using the following Command, install the package:
            >  npm install react-native-reanimated
        2) Then, use the following steps to generate APK File:
            > cd android
            > ./gradlew clean
            > ./gradlew assembleDebug
    