import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const deviceInfo = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
  deviceId: DeviceInfo.getDeviceId(),
  deviceName: DeviceInfo.getDeviceName(),
  appVersion: DeviceInfo.getVersion(),
  hasNotch: DeviceInfo.hasNotch(),
  OS: Platform.OS,
  ios: Platform.OS === 'ios',
  android: Platform.OS === 'android',
};
