import { Dimensions, Platform } from 'react-native'

const IS_ANDROID = Platform.OS === 'android'
export const SCREEN = Dimensions.get('window')
export const SCREEN_DIMENSION = Dimensions.get('screen')

const { height, width } = SCREEN

export const DEVICE_HEIGHT = IS_ANDROID ? height - 24 : height
export const DEVICE_WIDTH = width
export const DEVICE_MAX_HEIGHT = SCREEN.height
export const DEVICE_EXACT_HEIGHT = SCREEN_DIMENSION.height
export const DEFAULT_HEIGHT = IS_ANDROID
    ? DEVICE_MAX_HEIGHT - 24
    : DEVICE_MAX_HEIGHT

export default {
    SCREEN,
    DEVICE_MAX_HEIGHT,
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
}
