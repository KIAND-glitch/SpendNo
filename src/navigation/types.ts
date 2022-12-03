import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootTabParamListScreens = {
  Dashboard: undefined;
  Profile: undefined;
  Notifications: undefined;
};

export type RootStackParamListScreens = {
  Main: undefined;
  Landing: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type LandingScreenProps = StackScreenProps<RootStackParamListScreens>;

// Combining tab nav props and stack nav props
// https://reactnavigation.org/docs/typescript/
export type DashboardScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamListScreens, 'Dashboard'>,
  StackScreenProps<RootStackParamListScreens>
>;
