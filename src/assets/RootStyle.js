import {deviceInfo} from './DeviceInfo';
export const ratio = deviceInfo.deviceWidth / 375;
export const Sizes = {
  screenTitle: 20 * ratio > 20 ? 20 : 20 * ratio,
  size18_5: 18.5 * ratio > 18.5 ? 18.5 : 18.5 * ratio,
};
for (let i = 1; i < 450; i++) {
  Sizes[`size${i}`] = i * ratio;
}

export const Colors = {
  white: '#ffffff',
  black: '#000000',
  titleColor: '#3971c1',
  inputColor: '#F3F3F3',
  borderColor: '#DEDEDE',
  grey: '#a6a6a6',
  darkGrey: '#737373',
  highBat: '#38A98E',
  midBat: '#fa9a18',
  lowBat: '#FF636C',
};
export const BGColors = {
  mainBGColor: '#F3F3F3',
};

export const FullScreen = {
  width: deviceInfo.deviceWidth,
  height: deviceInfo.deviceHeight,
};
