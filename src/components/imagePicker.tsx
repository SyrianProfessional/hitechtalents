import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import RNImagePicker from 'react-native-image-crop-picker';
import {Text} from './text';

export type ImagePickerProps = {
  onGetImage: (image: string) => void;
};

export const ImagePicker = ({onGetImage}: ImagePickerProps) => {
  const [image, setImage] = React.useState<string>('');
  const takeSelfie = () => {
    RNImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera: true,
      avoidEmptySpaceAroundImage: true,
    })
      .then(({path}) => {
        onGetImage(path);
        setImage(path);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity style={styles.imageTouchable} onPress={takeSelfie}>
        {image ? (
          <Image style={styles.imageTouchable} source={{uri: image}} />
        ) : (
          <Text style={styles.imageText} h6>
            Tap to add avatar
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  imageTouchable: {
    height: 150,
    width: 120,
    backgroundColor: '#D0d0d0',
    borderRadius: 10,
  },
  imageText: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
