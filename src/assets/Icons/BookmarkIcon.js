import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Colors, Sizes} from '../RootStyle';

const BookmarkIcon = ({IconWidth, IconHeight, IconColor}) => {
  return (
    <Svg
      viewBox="-4.72 0 29.494 29.494"
      width={IconWidth ? IconWidth : Sizes.size20}
      height={IconHeight ? IconHeight : Sizes.size20}>
      <Path
        fill={IconColor ? IconColor : Colors.black}
        id="_09_-_Bookmark-2"
        data-name="09 - Bookmark"
        d="M26.029,4a3,3,0,0,0-3-3H8.971a3,3,0,0,0-3,3V27.494A3,3,0,0,0,10.6,30.013L16,26.524l5.4,3.489a3,3,0,0,0,4.628-2.519V4Zm-2,0V27.494a1,1,0,0,1-1.542.839l-5.944-3.84a1,1,0,0,0-1.086,0l-5.944,3.84a1,1,0,0,1-1.542-.839V4a1,1,0,0,1,1-1H23.029A1,1,0,0,1,24.029,4Z"
        transform="translate(-5.971 -1)"
        fill-rule="evenodd"
      />
    </Svg>
  );
};
export {BookmarkIcon};
