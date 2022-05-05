import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Colors, Sizes} from '../RootStyle';

const MenuIcon = ({IconWidth, IconHeight, IconColor}) => {
  return (
    <Svg
      viewBox="0 0 384.97 384.97"
      width={IconWidth ? IconWidth : Sizes.size35}
      height={IconHeight ? IconHeight : Sizes.size35}>
      <Path
        fill={IconColor ? IconColor : Colors.grey}
        d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"
      />
      <Path
        fill={IconColor ? IconColor : Colors.grey}
        d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			S379.58,180.455,372.939,180.455z"
      />
      <Path
        fill={IconColor ? IconColor : Colors.grey}
        d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
			c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"
      />
    </Svg>
  );
};
export {MenuIcon};
