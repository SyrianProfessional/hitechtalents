import React from 'react';
import {ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export type MainWrapperProps = {
  children: ReactNode;
  disableSafeArea?: boolean;
};

export const MainWrapper = ({
  children,
  disableSafeArea = false,
}: MainWrapperProps) => {
  const Wrapper = disableSafeArea ? View : SafeAreaView;
  return (
    <KeyboardAvoidingView style={styles.wrapper}>
      <StatusBar />
      <Wrapper style={styles.flex}>
        <View style={styles.flex}>{children}</View>
      </Wrapper>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
    paddingVertical: 20,
  },
});
