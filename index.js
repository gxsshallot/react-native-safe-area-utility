import { Dimensions, Platform, StatusBar } from 'react-native';

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isWeb = Platform.OS === 'web';

const {width: D_WIDTH, height: D_HEIGHT} = Dimensions.get('window');

function _compare(targetWidth, targetHeight) {
    return D_WIDTH === targetWidth && D_HEIGHT === targetHeight ||
        D_WIDTH === targetHeight && D_HEIGHT === targetWidth;
}

export const isIPhoneX = function () {
    // X + XS
    const X_WIDTH = 375;
    const X_HEIGHT = 812;
    // XR + XS Max
    const XSMAX_WIDTH = 414;
    const XSMAX_HEIGHT = 896;
    return isIos && (
        _compare(X_WIDTH, X_HEIGHT) ||
        _compare(XSMAX_WIDTH, XSMAX_HEIGHT)
    );
}();

export const isNewIPadPro = function () {
    const IPADPRO11_WIDTH = 834;
    const IPADPRO11_HEIGHT = 1194;
    const IPADPRO129_HEIGHT = 1024;
    const IPADPRO129_WIDTH = 1366;
    return isIos && (
        _compare(IPADPRO11_WIDTH, IPADPRO11_HEIGHT) ||
        _compare(IPADPRO129_WIDTH, IPADPRO129_HEIGHT)
    );
}();

export const isIPad = function () {
    if (!isIos || isIPhoneX) return false;
    const PAD_WIDTH = 768;
    const minEdge = Math.min(D_WIDTH, D_HEIGHT);
    return minEdge >= PAD_WIDTH;
}();

export function getSafeAreaInset(landscape, translucent = false) {
    if (landscape === undefined) {
        landscape = isLandscape();
    }
    const inset = (top, right, bottom, left) => ({top, right, bottom, left});
    if (isIos) {
        if (isIPhoneX) {
            return landscape ? inset(0, 44, 21, 44) : inset(44, 0, 34, 0);
        } else if (isNewIPadPro) {
            return inset(24, 0, 20, 0);
        } else if (isIPad) {
            return inset(20, 0, 0, 0);
        } else {
            return landscape ? inset(0, 0, 0, 0) : inset(20, 0, 0, 0);
        }
    } else if (isAndroid) {
        const top = translucent ? StatusBar.currentHeight : 0;
        return inset(top, 0, 0, 0);
    } else {
        return inset(0, 0, 0, 0);
    }
}

export function isLandscape() {
    const {width, height} = Dimensions.get('window');
    return width > height;
}