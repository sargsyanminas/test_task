import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import {styles} from './style';
import {FilterIcon, MenuIcon, RefreshIcon} from '../../assets/Icons';
import {BGColors, Colors, FullScreen, Sizes} from '../../assets/RootStyle';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {makeActions} from '../../store/actions/makeActions';
import {
  GET_NEXT_PAGE,
  GET_STORIES_LIST,
  SET_BEFORE_LIST_LOADER_VISIBLE,
  SET_LIST_LOADER_VISIBLE,
  SET_LOADER_VISIBLE,
  STORIES_LIST,
} from '../../store/actions/actionTypes';
import StoryItem from '../../components/StoryItem';

function HomeScreen() {
  const storiesList = useSelector(store => store.storiesList);
  const listLoaderVisible = useSelector(
    store => store.loader.listLoaderVisible,
  );
  const beforeListRenderLoader = useSelector(
    store => store.loader.beforeListRenderLoader,
  );
  const dispatch = useDispatch();
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const {
    container,
    header,
    menuTouch,
    logo,
    avatarsContainer,
    avatar,
    content,
    title,
    filtersContainer,
    filterButton,
    filterItemsContainer,
    filterItem,
    filterItemValue,
    filterItemTitle,
    listContainer,
  } = styles();

  useEffect(() => {
    getStoriesList();
  }, []);

  const refreshList = async () => {
    dispatch(makeActions(SET_BEFORE_LIST_LOADER_VISIBLE, true));
    dispatch(makeActions(STORIES_LIST, {stories: [], next_page_token: ''}));
    dispatch(makeActions(GET_STORIES_LIST));
  };

  const getStoriesList = async () => {
    dispatch(makeActions(SET_LOADER_VISIBLE, true));
    dispatch(makeActions(GET_STORIES_LIST));
  };

  const getNextPageOfList = async () => {
    dispatch(makeActions(SET_LIST_LOADER_VISIBLE, true));
    dispatch(makeActions(GET_NEXT_PAGE, storiesList.token));
  };

  const changeFiltersVisibility = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  const rendingStoriesList = ({item}) => <StoryItem item={item} />;
  const headerOfStoriesList = () => (
    <View>
      <Text style={title}>Watchlist Name</Text>
      <View style={filtersContainer}>
        <TouchableOpacity
          onPress={refreshList}
          style={[filterButton, {marginRight: Sizes.size10}]}>
          <RefreshIcon />
        </TouchableOpacity>
        <Pressable
          onPress={() => changeFiltersVisibility()}
          style={filterButton}>
          <FilterIcon />
        </Pressable>
      </View>
      {isFiltersVisible && (
        <View style={filterItemsContainer}>
          <TouchableOpacity
            style={[
              filterItem,
              {
                borderTopLeftRadius: Sizes.size5,
                borderTopRightRadius: Sizes.size5,
              },
            ]}>
            <Text style={filterItemValue}>1 min</Text>
            <Text style={filterItemTitle}>AUTOREFRESH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={filterItem}>
            <Text style={filterItemValue}>Top Rated</Text>
            <Text style={filterItemTitle}>ORDER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              filterItem,
              {
                borderBottomLeftRadius: Sizes.size5,
                borderBottomRightRadius: Sizes.size5,
              },
            ]}>
            <Text style={filterItemValue}>All Languages</Text>
            <Text style={filterItemTitle}>LANGUAGES</Text>
          </TouchableOpacity>
        </View>
      )}
      {beforeListRenderLoader && (
        <View
          style={{
            height: 50,
            padding: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color={Colors.titleColor} />
        </View>
      )}
    </View>
  );

  return (
    <View style={container}>
      <View style={header}>
        <TouchableOpacity style={menuTouch}>
          <MenuIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={logo}
            resizeMode="contain"
            source={require('../../assets/images/logo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={avatarsContainer}>
          <Image
            style={avatar}
            resizeMode="contain"
            source={require('../../assets/images/profile_img.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={content}>
        <FlatList
          style={listContainer}
          data={storiesList.list}
          onEndReached={getNextPageOfList}
          ItemSeparatorComponent={() => <View style={{height: Sizes.size5}} />}
          renderItem={rendingStoriesList}
          ListHeaderComponent={headerOfStoriesList}
          ListFooterComponent={() => (
            <View
              style={{
                marginTop: Sizes.size20,
                paddingBottom: Sizes.size40,
              }}>
              {listLoaderVisible && (
                <ActivityIndicator size="large" color={Colors.titleColor} />
              )}
            </View>
          )}
          // keyExtractor={item => item.uuid}
        />
      </View>
    </View>
  );
}

export default HomeScreen;
