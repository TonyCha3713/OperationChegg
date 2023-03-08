import { View, Text, SafeAreaView, StyleSheet, FlatList, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icons from 'react-native-vector-icons/Ionicons'
import COLORS from "../colors/colors";
import HomeworkDetail from "./HomeworkDetail";

const SearchTab = ({navigation}) => {

  useEffect(() => {
    fetchHomework();
    return () => {

    }
  }, [])


  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSerarch] = useState('');

  const onHomeworkPressed = (item) => {
    navigation.navigate("HomeworkDetail", {body: item.body, title: item.title})
  }

  const fetchHomework = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiURL)
    .then((response) => response.json())
    .then((responseJson) => {
      setfilterData(responseJson);
      setmasterData(responseJson);
    }).catch((error) => {
      console.error(error);
    })
  }

  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(item.body)
          console.log(item.title)
          navigation.navigate("HomeworkDetail", {item})
        }}
      >
        <Text style={styles.item}>{item.title}</Text>
        <Text style={styles.item}>{item.id}</Text>
      </TouchableOpacity> 
    )
  }

  const itemSeparatorView = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: COLORS.grey}}></View>
    )
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSerarch(text);
    } else {
      setfilterData(masterData);
      setSerarch(text);
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      <View style={styles.textInput}>
        <Icons 
          name="ios-search"
          style={{
            color: COLORS.grey,
            marginRight: 10,
            fontSize: 18,
          }}
        />
        <TextInput 
          value={search}
          placeholderTextColor={COLORS.grey}
          placeholder="Search homework, quiz, and test"
          onChangeText={(text) => searchFilter(text)}
          autoCorrect={false}
          style={{
            color: COLORS.white
          }}
        />
      </View>
      <FlatList 
        data={filterData}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={itemSeparatorView}
        renderItem={ItemView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white
  },
  item: {
    padding: 15,
    color: COLORS.white,
  },
  textInput: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    paddingLeft: 20,
    margin: 5,
    borderRadius: 20,
    borderColor: COLORS.blue,
    backgroundColor: COLORS.black
  }
});

export default SearchTab;