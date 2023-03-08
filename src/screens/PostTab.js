import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  FlatList,
  ScrollAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Carousel from "react-native-snap-carousel";
import COLORS from "../colors/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Input from "../components/Input";
import Button from "../components/Button";
import Slider from "react-native-slider";
import Loader from "./Loader";
export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const PostTab = ({ navigation }) => {
  const isCarousel = React.useRef(null);
  const [image, setImage] = useState(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(200);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    title: "",
    className: "",
    teacherName: "",
  });
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
      setLoading(true);
      result.assets.map((image) => {
        imageList.push(image);
      });
      setImage(imageList);
      setLoading(false);
    }
  };
  const Submit = () => {
    let valid = true;
    if (!form.title) {
      handleOnError("Please input assignment title", "title");
      valid = false;
    }
    if (!form.className) {
      handleOnError("Please input class name", "className");
      valid = false;
    }
    if (!form.title) {
      handleOnError("Please input teacher's name", "teacherName");
      valid = false;
    }
    if (!image) {
      valid = false;
    }

    if (valid) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setImage(null);
        setForm({
          title: "",
          className: "",
          teacherName: "",
        });
        navigation.navigate("Search");
      }, 2500);
    }
  };
  const handleOnChange = (text, form) => {
    setForm((prevState) => ({ ...prevState, [form]: text }));
  };
  const handleOnError = (errorMessage, form) => {
    setErrors((prevState) => ({ ...prevState, [form]: errorMessage }));
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: COLORS.white, fontSize: 40, fontWeight: "bold" }}>Upload</Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>Post your homework, quiz, or test and get paid!</Text>
        <View style={{ marginVertical: 20, width: "100%" }}>
          <Input
            iconName="clipboard-list-outline"
            label="Assignment title"
            placeholder="Enter assignment title"
            placeholderTextColor={COLORS.grey}
            onChangeText={(text) => handleOnChange(text, "title")}
            error={errors.title}
            onFocus={() => {
              handleOnError(null, "title");
            }}
          />
          <Input
            iconName="school-outline"
            label="Class name"
            placeholder="Enter class name"
            placeholderTextColor={COLORS.grey}
            onChangeText={(text) => handleOnChange(text, "className")}
            error={errors.className}
            onFocus={() => {
              handleOnError(null, "className");
            }}
          />
          <Input
            iconName="account-outline"
            label="Teacher name"
            placeholder="Enter teacher's name"
            placeholderTextColor={COLORS.grey}
            onChangeText={(text) => handleOnChange(text, "teacherName")}
            error={errors.teacherName}
            onFocus={() => {
              handleOnError(null, "teacherName");
            }}
          />
          <View style={styles.slider}>
            {image && (
              <Carousel
                layout="stack"
                layoutCardOffset={20}
                ref={isCarousel}
                data={image}
                renderItem={({ item, index }) => (
                  <View key={index}>
                    <Image
                      source={{ uri: item.uri }}
                      style={{ width: ITEM_WIDTH, height: ITEM_WIDTH + 80, borderRadius: 15, borderColor: COLORS.blue, borderWidth: 2 }}
                    />
                  </View>
                )}
                onSnapToItem={(index) => setIndex(index)}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
              />
            )}
          </View>
          <Button title="Add image" onPress={pickImage} />
          <View>
            <Text style={{ color: COLORS.grey, fontSize: 14 }}>Price</Text>
            <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 30, alignSelf: "center" }}>${price}</Text>
            <Slider
              minimumValue={0}
              maximumValue={1000}
              value={200}
              step={100}
              minimumTrackTintColor={COLORS.blue}
              thumbTintColor={COLORS.blue}
              onValueChange={(value) => setPrice(value)}
            />
          </View>
          <Button title="Submit" onPress={Submit} />
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
    justifyContent: "center",
    alignItems: "center",
  },
  noImage: {
    backgroundColor: COLORS.light,
    height: ITEM_WIDTH + 80,
    width: ITEM_WIDTH,
    borderRadius: 15,
    borderColor: COLORS.blue,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: COLORS.black,
    fontWeight: "bold",
  },
  slider: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostTab;
