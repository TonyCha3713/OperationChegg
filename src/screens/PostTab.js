import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, ScrollView, FlatList, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Carousel from 'react-native-snap-carousel';
import COLORS from '../colors/colors'
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const PostTab = () => {
  const isCarousel = React.useRef(null)
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let imageList = [];
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      allowsMultipleSelection: true,
      selectionLimit: 5,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      result.assets.map((image) => {
        imageList.push(image)
      })
      setImage(imageList)
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && 
          <Carousel 
            layout='defualt'
            layoutCardOffset={9}
            ref={isCarousel}
            data={image}
            renderItem={({item, index}) => (
              <View key={index}>
                <Image
                  source={{ uri: item.uri }}
                  style={{width: 200, height: 200}}
                />
              </View>
            )}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
          />
      }
    </View>
  );
};

export default PostTab;``