// types.ts

import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';
import React from 'react';

export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  dueDate: Date;
}

export type RootStackParamList = {
  AllTask: undefined;
  CreateTask: undefined;
};

export interface LabelInputProps extends TextInputProps {
  label?: string | number;
  labelFontSize?: number;
  error?: string;
  onChangeInput?: (text: string) => void; // onChange
  onFocus?: () => void;
  onBlur?: () => void;
  style?: StyleProp<ViewStyle>;
  multiline?: boolean;
  numberOfLines?: number;
  containerStyle?: StyleProp<ViewStyle>;
  labelColor?: string;
  labelStyle?: StyleProp<TextStyle>;
  errorColor?: string;
  inputStyle?: StyleProp<TextStyle>;
  icon?: React.JSX.Element;
  input?: React.JSX.Element;
  rightIcon?: React.JSX.Element | null | undefined;
}
