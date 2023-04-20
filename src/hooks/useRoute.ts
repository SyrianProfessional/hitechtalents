import {useRoute as useOriginalRoute} from '@react-navigation/core';
import {RouteKeys, RoutesProps} from '../interfaces/routeParamsList';

export const useRoute = <T extends RouteKeys>() =>
  useOriginalRoute<RoutesProps[T]>();
