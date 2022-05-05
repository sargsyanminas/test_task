import {StyleSheet} from 'react-native';
import {Colors, FullScreen, Sizes} from '../../assets/RootStyle';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      backgroundColor: Colors.white,
      borderColor: Colors.borderColor,
      borderBottomWidth: Sizes.size1,
      width: FullScreen.width,
      height: Sizes.size70,
      paddingHorizontal: Sizes.size20,
      alignItems: 'center',
    },
    menuTouch: {
      marginRight: Sizes.size30,
    },
    logo: {
      width: Sizes.size90,
    },
    avatarsContainer: {
      flex: 1,
      alignItems: 'flex-end',
    },
    avatar: {
      width: Sizes.size45,
      height: Sizes.size45,
      borderRadius: Sizes.size30,
    },
    content: {
      flex: 1,
      width: FullScreen.width,
    },
    title: {
      fontSize: Sizes.size20,
      color: Colors.titleColor,
    },
    filtersContainer: {
      flexDirection: 'row',
      marginVertical: Sizes.size20,
    },
    filterButton: {
      width: Sizes.size50,
      height: Sizes.size50,
      backgroundColor: Colors.white,
      borderColor: Colors.borderColor,
      borderWidth: Sizes.size1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    filterItemsContainer: {
      width: '100%',
      marginBottom: Sizes.size10,
      borderColor: Colors.borderColor,
      borderRadius: Sizes.size5,
    },
    filterItem: {
      backgroundColor: Colors.white,
      height: Sizes.size65,
      margin: Sizes.size1,
      padding: Sizes.size15,
    },
    filterItemValue: {
      fontSize: Sizes.size14,
      color: Colors.black,
    },
    filterItemTitle: {
      fontSize: Sizes.size12,
      color: Colors.grey,
    },
    listContainer: {
      flex: 1,
      width: '100%',
      paddingTop: Sizes.size20,
      paddingBottom: Sizes.size50,
      paddingHorizontal: Sizes.size20,
    },
  });
};

export {styles};
