import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Image,
  Text,
  View,
  Dimensions,
  TextInputProps,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';

export const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#9C9C9C',
    height: 48,
  },
  icon: {
    resizeMode: 'contain',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    height: 48,
    alignSelf: 'flex-start',
    fontSize: 14,
    marginRight: 20,
    color: '#0E0E0E',
    flex: 1,
  },
  titleText: {
    color: '#636363',
    fontSize: 14,
    paddingBottom: 5,
  },
  errorMessage: {
    color: '#FF0000',
    fontSize: 10,
    paddingTop: 5,
  },
});

interface InputFieldProps extends TextInputProps {
  onPress?: () => void;
  editable?: boolean;
  imageSource?: ImageSourcePropType;
  placeholder?: string;
  value?: string;
  width?: number;
  containerStyle?: ViewStyle;
  activeOpacity?: number;
  showLeftIcon?: boolean;
  titleText?: string;
  wrapperStyle?: ViewStyle;
  isError?: boolean;
  errorMessage?: string;
  inputRef?: React.Ref<TextInput>;
  titleStyle?: TextStyle;
  errorStyle?: TextStyle;
}

const InputField: React.FC<InputFieldProps> = ({
  onChangeText,
  onPress,
  editable = true,
  imageSource,
  placeholder,
  value,
  width,
  containerStyle,
  activeOpacity,
  showLeftIcon,
  titleText,
  wrapperStyle,
  isError,
  errorMessage,
  inputRef,
  titleStyle,
  errorStyle,
  maxLength,
  multiline,
  numberOfLines,
  selection,
  style,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isErr, setIsError] = useState(false);

  useEffect(() => {
    setIsError(isError || false);
  }, [isError]);

  return (
    <View style={wrapperStyle}>
      {titleText && (
        <Text style={[styles.titleText, titleStyle]}>{titleText}</Text>
      )}

      <View
        style={[
          styles.inputView,
          {width: width || screenWidth - 40, zIndex: 0.5},
          containerStyle,
        ]}>
        <TextInput
          selection={selection}
          multiline={multiline}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
          editable={editable}
          style={[styles.input, style]}
          onChangeText={onChangeText}
          underlineColorAndroid={'transparent'}
          value={value}
          placeholder={placeholder}
          keyboardType={'default'}
          ref={inputRef}
          onFocus={() => {
            setIsFocused(true);
            setIsError(false);
          }}
          onBlur={() => setIsFocused(false)}
          autoCorrect={false}
          autoComplete={'off'}
          blurOnSubmit={false}
          placeholderTextColor={'gray'}
          {...rest}
        />
      </View>
      {isErr && (
        <Text style={[styles.errorMessage, errorStyle]}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default InputField;
