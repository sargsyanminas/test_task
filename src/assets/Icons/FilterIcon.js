import React from 'react';
import {Svg, Polygon} from 'react-native-svg';
import {Colors, Sizes} from '../RootStyle';

const FilterIcon = ({IconWidth, IconHeight, IconColor}) => {
  return (
    <Svg
      viewBox="0 0 472.615 472.615"
      width={IconWidth ? IconWidth : Sizes.size25}
      height={IconHeight ? IconHeight : Sizes.size25}>
      <Polygon
        fill={IconColor ? IconColor : Colors.titleColor}
        points="472.615,12.908 0,12.908 180.081,202.629 180.066,459.708 292.55,401.525 292.534,202.629 		"
      />
    </Svg>
  );
};
export {FilterIcon};
