import React from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
  View,
} from 'react-native';
import {Text} from './text';

export type InputProps = TextInputProps & {
  error?: string;
};

export const Input = ({error, ...props}: InputProps) => {
  return (
    <View>
      <RNTextInput style={styles.input} {...props} />
      {!!error && <Text>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
  },
});
