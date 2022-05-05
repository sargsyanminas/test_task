import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Colors, Sizes} from '../RootStyle';

const RefreshIcon = ({IconWidth, IconHeight, IconColor}) => {
  return (
    <Svg
      viewBox="0 0 490.563 490.563"
      width={IconWidth ? IconWidth : Sizes.size25}
      height={IconHeight ? IconHeight : Sizes.size25}>
      <Path
        fill={IconColor ? IconColor : Colors.titleColor}
        d="M331.004,128.766c-2.1,11.4,5.2,21.8,16.6,23.9l102,17.7c12.1,1.9,20.1-6.6,22.9-17.7l17.7-102
		c2.1-11.4-5.2-21.8-16.6-23.9s-21.8,5.2-23.9,16.6l-9,54.7c-45.7-60.7-117.9-97.8-195.8-97.9c-146.7,0-243.9,116.3-244.9,244.9
		c-0.5,65.4,49.8,232.9,244.8,244.8c195.2,11.9,244.8-179.4,244.8-244.8c0-11.3-9.2-20.5-20.5-20.5s-20.5,9.2-20.5,20.5
		c0,112.4-91.4,203.8-203.8,203.8s-203.8-91.4-203.8-203.8s91.4-203.8,203.8-203.8c63.9,0,123.3,30.1,161.4,79.3l-51.2-8.5
		C343.504,109.966,333.104,117.266,331.004,128.766z"
      />
    </Svg>
  );
};
export {RefreshIcon};
