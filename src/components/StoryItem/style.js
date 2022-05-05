import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: Colors.white,
      borderColor: Colors.borderColor,
      borderRadius: Sizes.size3,
      borderWidth: Sizes.size1,
    },
    content: {
      width: '100%',
      flexDirection: 'row',
    },
    itemImg: {
      width: Sizes.size70,
      borderTopLeftRadius: Sizes.size3,
      borderBottomLeftRadius: Sizes.size3,
    },
    itemInfo: {
      flex: 1,
      padding: Sizes.size20,
    },
    title: {
      fontSize: Sizes.size16,
      color: Colors.black,
    },
    description: {
      fontSize: Sizes.size14,
      color: Colors.darkGrey,
      marginTop: Sizes.size5,
    },
    authorInfo: {
      width: '100%',
      flexDirection: 'row',
      marginTop: Sizes.size15,
    },
    authorImg: {
      width: Sizes.size20,
      height: Sizes.size20,
      borderRadius: Sizes.size3,
      marginRight: Sizes.size10,
    },
    authorName: {
      fontSize: Sizes.size12,
      color: Colors.grey,
    },
    scoreContainer: {
      height: Sizes.size45,
      flexDirection: 'row',
      alignItems: 'center',
    },
    score: {
      flex: 1,
      paddingTop: Sizes.size15,
      fontSize: Sizes.size12,
    },
    arrowTouch: {
      flex: 1,
      paddingTop: Sizes.size15,
      height: '100%',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    reportIconsContainer: {
      height: Sizes.size60,
      flexDirection: 'row',
      paddingLeft: Sizes.size80,
      paddingRight: Sizes.size20,
      alignItems: 'center',
      backgroundColor: Colors.white,
      borderColor: Colors.borderColor,
      borderTopWidth: Sizes.size1,
      marginBottom: Sizes.size3,
    },
    reportIconPress: {
      flex: 1,
      height: '100%',
      paddingTop: Sizes.size5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export {styles};
