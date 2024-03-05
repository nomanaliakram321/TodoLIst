import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Pressable from '../Pressable';
import Icon from '../Icon';

interface IConBtnProps {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  name: string;
  iconColor?: string;
  size?: number;
}
const IconButton: React.FC<IConBtnProps> = ({
  style,
  iconColor = 'black',
  onPress,
  size,
  name,
}) => {
  return (
    <Pressable style={style} onPress={() => onPress?.()}>
      <Icon icon={name} color={iconColor} size={size} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  xIcon: {
    width: 20,
    height: 20,
    zIndex: 1,
  },
});

export default IconButton;
