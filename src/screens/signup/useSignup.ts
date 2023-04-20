import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FormikConfig, useFormik} from 'formik';
import {useCallback, useState} from 'react';
import * as Yup from 'yup';
import {RouteParamsList} from '../../interfaces/routeParamsList';
import {SignupFormProps} from './types';

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RouteParamsList>>();

  const validationSchema: FormikConfig<SignupFormProps>['validationSchema'] =
    Yup.object().shape({
      firstName: Yup.string(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      website: Yup.string().url(),
      avatar: Yup.string(),
    });

  const onSubmit = useCallback(
    (values: SignupFormProps) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('hello', values);
      }, 2000);
    },
    [navigate],
  );

  const formik = useFormik<SignupFormProps>({
    initialValues: {
      firstName: 'asd',
      email: 'asd@asd.asd',
      password: 'asdasd',
      website: 'https://gitlab.cloud',
      avatar: '',
    },
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });

  const onGetImage = useCallback(
    (avatar: string) => {
      formik.setFieldValue('avatar', avatar);
    },
    [formik],
  );

  return {formik, loading, onGetImage};
};
