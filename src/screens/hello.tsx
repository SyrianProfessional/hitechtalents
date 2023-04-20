import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '../components/text';
import {useRoute} from '../hooks/useRoute';
import {MainWrapper} from '../components/mainWrapper';

export const Hello = () => {
  const {avatar, email, firstName, website} = useRoute<'hello'>().params;

  return (
    <MainWrapper>
      <Text h1 bold>
        Hello, {firstName}!
      </Text>

      <Text style={styles.headerTextDescription}>
        Your supper awesome portfolio has been successfully submitted! The
        preview below is what the community will see.
      </Text>

      <View style={styles.contentWrapper}>
        {!!avatar && <Image source={{uri: avatar}} style={styles.image} />}
        <Text style={styles.emailText}>{website}</Text>
        <Text h3 bold>
          {firstName}
        </Text>
        <Text h3 bold>
          {email}
        </Text>
      </View>

      <View style={styles.flex} />

      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.submitButtonText}>Sign In</Text>
      </TouchableOpacity>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {flex: 1},
  headerTextDescription: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
    opacity: 0.6,
  },
  contentWrapper: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 10,
    marginVertical: 30,
  },
  emailText: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
    opacity: 0.6,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  buttonStyle: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
});
