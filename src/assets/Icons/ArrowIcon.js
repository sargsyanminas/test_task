import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Colors, Sizes} from '../RootStyle';

const ArrowIcon = ({IconWidth, IconHeight, IconColor, isOpen}) => {
  return (
    <Svg
      width={IconWidth ? IconWidth : Sizes.size25}
      height={IconHeight ? IconHeight : Sizes.size13}
      viewBox="0 0 330 330"
      fill="none">
      {isOpen ? (
        <Path
          fill={IconColor ? IconColor : Colors.grey}
          id="XMLID_105_"
          d="M324.001,209.25L173.997,96.75c-5.334-4-12.667-4-18,0L6.001,209.25c-6.627,4.971-7.971,14.373-3,21
	c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001L164.998,127.5l141.003,105.75c6.629,4.972,16.03,3.627,21-3
	C331.972,223.623,330.628,214.221,324.001,209.25z"
        />
      ) : (
        <Path
          fill={IconColor ? IconColor : Colors.grey}
          id="XMLID_225_"
          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
        />
      )}
    </Svg>
  );
};
export {ArrowIcon};
