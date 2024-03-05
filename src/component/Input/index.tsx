import React from 'react';
import type {
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {View, TextInput as NTextInput, StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import Text from '../Text';

export interface NInputProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  error?: string;
  maximum?: number;
}

const Input = React.forwardRef<TextInput, NInputProps>(
  ({style, maximum, error, ...inputProps}, ref) => {
    return (
      <View>
        <View
          style={StyleSheet.flatten([
            styles.container,
            {borderColor: !error ? colors.PLATINUM : colors.TERTIARY},
            style,
          ])}>
          <NTextInput
            ref={ref}
            style={styles.flex}
            placeholderTextColor={colors.PLACEHOLDER}
            maxLength={maximum}
            // onBlur={onBlur}
            // onFocus={onFocus}
            {...inputProps}
          />
          {maximum && (
            <Text fontSize={10} color={colors.LIGHT} style={styles.maxWords}>
              Maximum {maximum} characters
            </Text>
          )}
        </View>
        <Text
          fontSize={13}
          style={StyleSheet.compose(styles.error, {marginTop: error ? 5 : 0})}
          color={colors.PRIMARY}>
          {error}
        </Text>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ALICE_BLUE,
    paddingHorizontal: 16,
    borderWidth: 1,
    height: 56,
    borderRadius: 5,
  },
  error: {
    width: '100%',
    alignSelf: 'center',
  },
  flex: {flex: 1, color: colors.NERO_BLACK},
  maxWords: {
    textAlign: 'right',
    marginBottom: 7,
  },
});

export default Input;
