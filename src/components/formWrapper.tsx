import {FormikContextType, FormikProvider} from 'formik';
import React, {ReactNode, useMemo} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text} from './text';

export type FormWrapperProps<T> = {
  formik: FormikContextType<T>;
  children: ReactNode;
  shouldFlex?: boolean;
  disabled?: boolean;
  scrollEnabled?: boolean;
  loading?: boolean;
  bottomText?: string;
};

export function FormWrapper<T>({
  children,
  formik,
  bottomText = '',
  shouldFlex,
  disabled,
  scrollEnabled = true,
  loading,
}: FormWrapperProps<T>) {
  const {dirty, isValid, handleSubmit} = formik;

  const disableSubmit = useMemo(() => {
    if (disabled || loading) {
      return disabled;
    }
    return !isValid || !dirty;
  }, [disabled, loading, isValid, dirty]);

  return (
    <FormikProvider value={formik}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={scrollEnabled}
        contentContainerStyle={styles.scrollView}>
        {children}
        {shouldFlex && <View style={styles.flex} />}
        <TouchableOpacity
          disabled={disableSubmit}
          style={[
            styles.buttonStyle,
            {backgroundColor: disableSubmit ? 'gray' : 'red'},
          ]}
          onPress={handleSubmit}>
          {!loading && (
            <Text style={styles.submitButtonText}>{bottomText}</Text>
          )}
          {loading && <ActivityIndicator color="white" />}
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </FormikProvider>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    // justifyContent: 'space-around',
  },
  textsSection: {},
  textTitle: {
    fontSize: 30,
    fontWeight: '900',
    opacity: 0.6,
  },
  headerTextDescription: {
    fontSize: 15,
    fontWeight: '800',
    opacity: 0.6,
    marginTop: 5,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.2,
    marginTop: 20,
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
  },
  buttonStyle: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageTouchable: {
    height: 150,
    width: 120,
    backgroundColor: '#D0d0d0',
  },
  imageText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});
