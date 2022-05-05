import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {BGColors, Colors, FullScreen} from './assets/RootStyle';
import Navigation from './Navigation';
import {useSelector} from 'react-redux';

const Main = () => {
  const loader = useSelector(store => store.loader.visible);

  return (
    <View style={{flex: 1}}>
      {loader && (
        <ActivityIndicator
          size="large"
          color={Colors.titleColor}
          style={{
            zIndex: 1,
            width: FullScreen.width,
            height: FullScreen.height,
            backgroundColor: BGColors.mainBGColor,
          }}
        />
      )}
      <Navigation />
    </View>
  );
};
export default Main;
