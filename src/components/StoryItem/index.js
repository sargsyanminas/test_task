import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './style';
import {Colors} from '../../assets/RootStyle';
import {ArrowIcon} from '../../assets/Icons';
import {BookmarkIcon, LikeIcon} from '../../assets/Icons';

const StoryItem = ({item}) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const {
    container,
    content,
    itemImg,
    itemInfo,
    title,
    description,
    authorInfo,
    authorImg,
    authorName,
    scoreContainer,
    arrowTouch,
    score,
    reportIconsContainer,
    reportIconPress,
  } = styles();

  const changeDescriptionVisibility = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <View style={container}>
      <View style={content}>
        {item.imageUrls && (
          <Image
            style={itemImg}
            resizeMode="cover"
            source={{
              uri: item.imageUrls[0],
            }}
          />
        )}
        <View style={itemInfo}>
          <Text style={title}>{item.title}</Text>
          {isDescriptionVisible && (
            <Text style={description}>{item.description}</Text>
          )}
          <View style={authorInfo}>
            <Image
              style={authorImg}
              resizeMode="contain"
              source={{
                uri: item.domain_cached_logo_url,
              }}
            />
            <Text style={authorName}>{item.domain_name}</Text>
          </View>
          <View style={scoreContainer}>
            <Text
              style={[
                score,
                {
                  color:
                    item.score > 50
                      ? Colors.highBat
                      : item.score > 20 && item.score <= 50
                      ? Colors.midBat
                      : Colors.lowBat,
                },
              ]}>
              {item.score}%
            </Text>
            <Pressable
              onPress={() => changeDescriptionVisibility()}
              style={arrowTouch}>
              <ArrowIcon isOpen={isDescriptionVisible} />
            </Pressable>
          </View>
        </View>
      </View>
      {isDescriptionVisible && (
        <View style={reportIconsContainer}>
          <Pressable style={reportIconPress}>
            <LikeIcon IconType="like" />
            <Text>Like</Text>
          </Pressable>
          <Pressable style={reportIconPress}>
            <LikeIcon IconType="dislike" />
            <Text>Dislike</Text>
          </Pressable>
          <Pressable style={reportIconPress}>
            <BookmarkIcon />
            <Text>Bookmark</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default StoryItem;
