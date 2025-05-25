
import {
  GestureResponderEvent,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

interface Props {
  isDisabled: boolean;
  value: any;
  placeholderText: string;
  errorText?: any;
  onChange: (value: any) => void;
  onBlur?: (value: any) => void;
  keyboardType: any;
  onPress?: (event: GestureResponderEvent) => void;
  maxChar?: number;
}

const CommonTextInput: React.FC<Props> = ({
  isDisabled,
  value,
  placeholderText,
  errorText,
  onChange,
  keyboardType,
  maxChar,
}) => {
  const [isOnFocus, setIsOnFocus] = useState(false);


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
        <View
          style={[
            styles.inputContainer,
            isOnFocus && {borderColor: 'black'},
            isDisabled && styles.disabledContainer,
          ]}>
          <TextInput
            style={[
              styles.textInput,
              isOnFocus && {borderColor: 'black'},
              isDisabled && styles.disabledTextInput,
            ]}
            placeholderTextColor="#0D0C22"
            value={value}
            placeholder={placeholderText}
            onFocus={() => setIsOnFocus(true)}
            onChangeText={onChange}
            editable={!isDisabled}
            keyboardType={keyboardType}
            maxLength={maxChar}
          />
        </View>
        {errorText && <Text style={styles.errorText}>{errorText}</Text>}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom:20,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    height: 44,
  },
  textInput: {
    flex: 1,
    height: 44,
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 10,
    color: 'black',
    fontFamily: 'Inter',
  },

  errorText: {
    fontSize: 12,
    marginLeft: 10,
    color: 'red',
    top: 5,
  },
  disabledContainer: {
    backgroundColor: '#f0f0f0',
    borderColor: '#d0d0d0',
  },
  disabledTextInput: {
    color: 'black',
    opacity: 0.6,
  },
});

export default CommonTextInput;
