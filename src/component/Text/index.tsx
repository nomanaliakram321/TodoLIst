import React from 'react';
import type {TextProps} from 'react-native';
import {
  Text as NativeText,
  StyleSheet,
  TextStyle,
  StyleProp,
} from 'react-native';
import { colors } from "../../theme/colors.ts";
import { scale } from "../../utils/helper.ts";


interface ITextProps extends TextProps {
  style?: StyleProp<TextStyle> | undefined;
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  textAlign?: TextStyle['textAlign'];
  letterSpacing?: number;
  children?: React.ReactNode | string;
}

const spacing = (value: number) => {
  return 0.16 * value;
};

const Text: React.FC<ITextProps> = ({
  fontFamily = '',
  fontSize = 14,
  color = colors.THIN,
  letterSpacing,
  textAlign,
  style = {},
  children = '',
  ...rest
}) => {
  return (
    <NativeText
      accessibilityRole="text"
      // maxFontSizeMultiplier={3}
      style={StyleSheet.flatten([
        {
          fontFamily,
          fontSize: scale(fontSize),
          color,
          textAlign,
        },
        letterSpacing ? {letterSpacing: spacing(letterSpacing)} : {},
        style,
      ])}
      {...rest}>
      {children}
    </NativeText>
  );
};

export default Text;
