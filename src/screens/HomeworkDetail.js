import React, { useState, useEffect } from 'react';
import { Image, View, Platform, RefreshControl, SafeAreaView, ScrollView, FlatList, ScrollAreaView, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Carousel from 'react-native-snap-carousel';
import COLORS from '../colors/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Input from '../components/Input';
import Button from '../components/Button';
import Slider from 'react-native-slider';
import Loader from './Loader';
import Icons from 'react-native-vector-icons/FontAwesome'
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const HomeworkDetail = ({navigation}) => {
  const isCarousel = React.useRef(null)
  const [image, setImage] = useState(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(200);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    title: '',
    className: '',
    teacherName: '',
  })
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let imageList = [];
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      selectionLimit: 10,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setLoading(true)
      result.assets.map((image) => {
        imageList.push(image)
      })
      setImage(imageList)
      setLoading(false)
    }
  };
  const Submit = () => {
      let valid = true
      if(!form.title) {
        handleOnError("Please input assignment title", 'title')
        valid = false;
      }
      if(!form.className) {
        handleOnError("Please input class name", 'className')
        valid = false;
      }
      if(!form.title) {
        handleOnError("Please input teacher's name", 'teacherName')
        valid = false;
      }
      if(!image) {
        valid = false;
      }

      if (valid) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false)
          setImage(null)
          setForm({
            title: '',
            className: '',
            teacherName: '',})
          navigation.navigate("Search")
      }, 2500)
      }
  }
  const handleOnChange = (text, form) => {
    setForm(prevState => ({...prevState, [form]: text}))
  }
 const handleOnError = (errorMessage, form) => {
    setErrors((prevState) => ({...prevState, [form]: errorMessage}));
  }

  return (
    <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
      <Loader visible={loading}/>
      <ScrollView contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.white, fontSize: 40, fontWeight: 'bold'}}>$70</Text>
        <Text style={{color: COLORS.grey, fontSize: 20, marginVertical: 10}}>Homework Packet #5</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{color: COLORS.blue, fontSize: 12}}>AP Computer Science</Text>
            <Text style={{color: COLORS.blue, fontSize: 12}}>Mr.Swatek</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icons 
                    name="thumbs-o-up"
                    style={{
                        color: COLORS.blue,
                        marginRight: 5,
                    }}
                />
                <Text style={{color: COLORS.blue}}>59</Text>
            </View>
        </View>
        <View style={{marginVertical: 20}}>
            <Text style={{color: COLORS.white, fontSize: 18, marginVertical: 10}}>Preview</Text>
          <View style={styles.slider}>
          {
           image ? (
            <>
              <Carousel 
                layout='stack'
                layoutCardOffset={20}
                ref={isCarousel}
                data={image}
                renderItem={({item, index}) => (
                  <View key={index}>
                    <Image
                      source={{ uri: item.uri }}
                      style={{width: ITEM_WIDTH, height: ITEM_WIDTH+80, borderRadius: 15, borderColor: COLORS.blue, borderWidth: 2}}
                      blurRadius={90}
                    />
                  </View>
                )}
                onSnapToItem={(index) => setIndex(index)}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
              />
            </>
            ) : (
              <TouchableOpacity style={styles.noImage} onPress={pickImage}>
                <Text style={styles.text}>Add an image</Text>
              </TouchableOpacity>
            )
          }
          </View>
          <Button title="Buy" onPress={Submit}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noImage: {
    backgroundColor: COLORS.light,
    height: ITEM_WIDTH + 80,
    width: ITEM_WIDTH,
    borderRadius: 15,
    borderColor: COLORS.blue,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: COLORS.black,
    fontWeight: 'bold'
  },
  slider: {
    alignItems: 'center',
    width: ITEM_WIDTH
  }
})

export default HomeworkDetail;