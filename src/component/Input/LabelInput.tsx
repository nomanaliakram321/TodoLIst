import React, {forwardRef, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputChangeEventData,
} from 'react-native';
import {LabelInputProps} from '../../types';
import Text from '../Text';
import {colors} from '../../theme/colors.ts';

const LabelInput = forwardRef<TextInput, LabelInputProps>(
  (
    {
      label = '',
      error = '',
      containerStyle,
      labelColor = 'grey',
      labelFontSize = 20,
      numberOfLines = 1,
      multiline = false,
      style,
      labelStyle = {},
      inputStyle = {},
      icon,
      rightIcon,
      input,
      ...props
    },
    ref,
  ) => {
    const [val, setValue] = useState(props.value ? props.value : '');

    const onChangeText = (nativeEvent: TextInputChangeEventData) => {
      setValue(nativeEvent.text);
      props?.onChangeInput && props.onChangeInput(nativeEvent.text.trim());
    };
    const onFocusHandler = () => {
      props?.onFocus ? props?.onFocus() : () => {};
    };

    const onBlurHandler = () => {
      props?.onBlur ? props?.onBlur() : () => {};
    };

    return (
      <View style={[styles.container, style]}>
        <View
          style={StyleSheet.flatten([
            styles.inputContainer,
            {
              paddingLeft: icon ? 31 : 0,
              borderBottomColor: error ? 'red' : 'rgba(0, 0, 0, 0.3)',
            },
            containerStyle,
          ])}>
          <Text
            fontSize={labelFontSize}
            color={error ? colors.ERROR : labelColor}
            style={StyleSheet.compose(
              {
                left: icon ? 20 : 0,
                color: colors.NERO,
              },
              labelStyle,
            )}>
            {label}
          </Text>
          {icon ? (
            <View style={styles.iconContainer}>{icon}</View>
          ) : (
            <React.Fragment />
          )}
          {input ? (
            input
          ) : (
            <TextInput
              numberOfLines={numberOfLines}
              multiline={multiline}
              ref={ref}
              style={[styles.input, {color: colors.THIN}, inputStyle]}
              value={val}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              onChange={({nativeEvent}) => onChangeText(nativeEvent)}
              {...props}
            />
          )}
          {rightIcon ? (
            <View style={styles.rightIconContainer}>{rightIcon}</View>
          ) : (
            <React.Fragment />
          )}
        </View>
        {error && (
          <Text
            color={colors.ERROR}
            fontSize={12}
            style={StyleSheet.compose(styles.error, {
              marginTop: error ? 5 : 0,
            })}>
            {error}
          </Text>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.NEUTRAL_GREY,
  },
  input: {
    fontSize: 14,
    height: 45,
    paddingRight: 40,
    justifyContent: 'center',
    marginTop: 14,
  },
  error: {
    width: '100%',
    alignSelf: 'center',
  },
  iconContainer: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
  },
  rightIconContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    right: 10,
    bottom: 12,
    height: '100%',
  },
});
export default LabelInput;
