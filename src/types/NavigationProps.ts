import { NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined;
  Pin: { id: string };
  CreatePin: undefined;
}

export type TabParamList = {
  HomeScreen: NavigatorScreenParams<MainStackParamList>;
  ButtonModal: undefined;
  Profile: { userId: string };
}

//  home screen
export type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'Home'>

//  pin screen
export type PinScreenProps = NativeStackScreenProps<MainStackParamList, 'Pin'>
export type PinScrenNavigationProps = PinScreenProps['navigation']
export type PinScreenRouteProps = PinScreenProps['route']
