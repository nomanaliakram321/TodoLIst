import {MMKV} from 'react-native-mmkv';
import { Dimensions, PixelRatio, Platform } from "react-native";
const pixelRatio = PixelRatio.get();

export const storage = new MMKV();
export const isIOS: boolean = Platform.OS === 'ios';
export const isAndroid: boolean = Platform.OS === 'android';


export const {width, height} = Dimensions.get('window');

const metricsNumber = () => {
  const density = pixelRatio * 160;
  const x = Math.pow((width * pixelRatio) / density, 2);
  const y = Math.pow((height * pixelRatio) / density, 2);
  return Math.sqrt(x + y) + 1.6;
};
export const scale = (number: number) => {
  const ratio = (metricsNumber() + pixelRatio) / 10;
  const value = number * Number(ratio.toFixed(1));
  return Number(value.toFixed(1));
};
