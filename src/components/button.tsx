import React from 'react';
import {Button as RNButton, ButtonProps, View} from 'react-native';

export type InputProps = ButtonProps;

export const Button = ({...props}: InputProps) => {
  return (
    <View>
      <RNButton {...props} />
    </View>
  );
};
