import React from 'react';
import {Platform, Text as RNText, TextProps, TextStyle} from 'react-native';

export type TextProp = TextProps & {
  bold?: boolean;
  selectable?: boolean;
  lines?: number;
  center?: boolean;
  lineThrough?: boolean;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  ltr?: boolean;
  rtl?: boolean;
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  h1?: boolean;
  h3?: boolean;
  h6?: boolean;
};

export const Text = ({
  children,
  bold,
  lines,
  center,
  lineThrough,
  weight,
  style,
  selectable = true,
  transform,
  h1,
  h3,
  h6,
  ...props
}: TextProp) => {
  const styles: TextStyle = {
    textAlignVertical: 'center',
    color: 'black',
  };

  if (bold) {
    if (Platform.OS === 'ios') {
      styles.fontWeight = '700';
    } else {
      styles.fontWeight = 'bold';
    }
  }
  if (center) {
    styles.textAlign = 'center';
    styles.alignSelf = 'center';
  }
  if (lineThrough) {
    styles.textDecorationLine = 'line-through';
    styles.textDecorationStyle = 'solid';
  }
  if (weight) {
    styles.fontWeight = weight;
  }
  if (transform) {
    styles.textTransform = transform;
  }

  if (h1) {
    styles.fontSize = 30;
  }

  if (h3) {
    styles.fontSize = 15;
  }
  if (h6) {
    styles.fontSize = 10;
  }

  return (
    <RNText
      selectable={selectable}
      numberOfLines={lines}
      style={[styles, style]}
      {...props}>
      {children}
    </RNText>
  );
};
