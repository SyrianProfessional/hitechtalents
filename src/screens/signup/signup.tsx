import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FormWrapper} from '../../components/formWrapper';
import {InputField} from '../../components/inputField';
import {ImagePicker} from '../../components/imagePicker';
import {MainWrapper} from '../../components/mainWrapper';
import {Text} from '../../components/text';
import {SignupFormProps} from './types';
import {useSignup} from './useSignup';

export const Signup = () => {
  const {formik, onGetImage, loading} = useSignup();

  return (
    <MainWrapper>
      <FormWrapper formik={formik} bottomText="Submit" loading={loading}>
        <View style={styles.container}>
          <View>
            <Text h1 bold>
              Profile Creation
            </Text>
            <Text h3>use form below to submit your portfolio.</Text>
            <Text h3>An email and password will be required .</Text>
          </View>

          <ImagePicker onGetImage={onGetImage} />

          <InputField<SignupFormProps>
            name="firstName"
            placeholder="First Name"
          />
          <InputField<SignupFormProps>
            name="email"
            placeholder="Email Address"
            keyboardType="email-address"
          />
          <InputField<SignupFormProps>
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <InputField<SignupFormProps>
            name="website"
            placeholder="Website"
            keyboardType="url"
          />
        </View>
      </FormWrapper>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonStyle: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
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
