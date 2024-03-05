import React from 'react';
import {
  Pressable as NativeButton,
  StyleProp,
  ViewStyle,
  PressableProps,
} from 'react-native';
import {isAndroid} from '../../utils/helper.ts';

interface IPressProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  touchOpacity?: number;
}

const Pressable: React.FC<IPressProps> = ({
  children,
  style,
  touchOpacity = 0.6,
  ...restOfProps
}) => {
  return (
    <NativeButton
      style={({pressed}) => [
        style,
        {opacity: !isAndroid && pressed ? touchOpacity : 1},
      ]}
      {...restOfProps}>
      {children}
    </NativeButton>
  );
};
export default Pressable;
