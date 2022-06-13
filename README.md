
# react-native-actionsheet

## Getting started

`$ npm install react-native-actionsheet --save`

### Mostly automatic installation

`$ react-native link react-native-actionsheet`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-actionsheet` and add `RNActionsheet.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNActionsheet.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.xiaohuanghuang.actionsheet.RNActionsheetPackage;` to the imports at the top of the file
  - Add `new RNActionsheetPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-actionsheet'
  	project(':react-native-actionsheet').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-actionsheet/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-actionsheet')
  	```


## Usage
```javascript
import RNActionsheet from 'react-native-actionsheet';

// TODO: What to do with the module?
RNActionsheet;
```
  