import {RouteProp} from '@react-navigation/native';
import {PartialRoute, Route} from '@react-navigation/routers';
import {SignupFormProps} from '../screens/signup/types';

export type RouteParamsList = {
  hello: SignupFormProps;
  signup: undefined;
};

export type RouteKeys = keyof RouteParamsList;
export type RoutesType = PartialRoute<Route<keyof RouteParamsList>>;

export type RoutesProps = {
  [key in RouteKeys]: RouteProp<RouteParamsList, key>;
};
