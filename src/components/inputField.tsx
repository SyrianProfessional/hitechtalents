import {useField} from 'formik';
import React from 'react';
import {KeyboardTypeOptions, StyleSheet, View} from 'react-native';
import {GenericObject, MinimalFieldProp} from '../interfaces';
import {Input} from './input';
export type BaseFieldProp<T extends GenericObject> = MinimalFieldProp<T> & {};

export type InputFieldProps<T extends GenericObject> = BaseFieldProp<T> & {
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
};

export const InputField = <FormFields extends GenericObject>({
  placeholder = '',
  name,
  keyboardType = 'default',
  value,
  secureTextEntry,
}: InputFieldProps<FormFields>) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={styles.wrapper}>
      <Input
        keyboardType={keyboardType}
        onChangeText={text => {
          helpers.setTouched(true);
          helpers.setValue(text);
        }}
        onBlur={() => {
          helpers.setTouched(true);
        }}
        placeholder={placeholder}
        error={meta.touched && meta.error ? meta.error : ''}
        value={value ? value : field.value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
  },
});
