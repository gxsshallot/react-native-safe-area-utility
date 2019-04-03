# react-native-safe-area-insets

[![npm version](https://img.shields.io/npm/v/react-native-safe-area-insets.svg?style=flat)](https://www.npmjs.com/package/react-native-safe-area-insets)
[![Build Status](https://travis-ci.org/gaoxiaosong/react-native-safe-area-insets.svg?branch=master)](https://travis-ci.org/gaoxiaosong/react-native-safe-area-insets)

A tool for getting insets of Safe Area in React Native view.

## Platform

It exports three constants for three platforms.

For example:

```javascript
import { isIos, isAndroid, isWeb } from 'react-native-safe-area-inset';

if (isIos) {
    // ...
} else if (isAndroid) {
    // ...
} else if (isWeb) {
    // ...
}
```

## Device

There is some constants to identify special devices.

* `isIPhoneX`: iPhone X serial devices.
* `isIPad`: iPad.
* `isNewIPadPro`: Only new iPad Pro which is full screen.

For example:

```javascript
import { isIPhoneX, isIPad, isNewIPadPro } from 'react-native-safe-area-inset';

if (isIPhoneX) {
    // ...
} else if (isNewIPadPro) {
    // ...
} else if (isIPad) {
    // ...
}
```

## Safe Area Inset

You can use `getSafeAreaInset` to get the insets of safe area in window. It is implemented by javascript only without native code.

It supports:

* iPhone (Not X).
* iPhone X Serial.
* iPad.
* New iPad Pro (Full Screen).
* Android (Translucent or not).

It support both portrait and landscape for each device.

The method has two parameters. First one is `landscape`, which uses auto judging when is `undefined`. Second one is `translucent` for Android device only.

For example:

```javascript
import { getSafeAreaInset } from 'react-native-safe-area-inset';

const insets = getSafeAreaInset();
// const insets = getSafeAreaInset(undefined, true);
// const insets = getSafeAreaInset(true);
const {top, bottom, left, right} = insets;
```

## Util

There are some utilities:

* `isLandscape`: Get landscape status.

For example:

```javascript
import { isLandscape } from 'react-native-safe-area-inset';

if (isLandscape()) {
    // ...
} else {
    // ...
}
```