export const isIos: boolean;
export const isAndroid: boolean;
export const isWeb: boolean;

export const isIPhoneX: boolean;
export const isNewIPadPro: boolean;
export const isIPad: boolean;

interface SafeAreaInset {
    top: number;
    bottom: number;
    left: number;
    right: number;
}

export function getSafeAreaInset(landscape?: boolean, translucent?: boolean): SafeAreaInset;
export function isLandscape(): boolean;