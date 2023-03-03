import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import Button from "../components/Button";
import COLORS from "../colors/colors";
const FindSchool = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  // { label: "Palos Verdes Peninsula High School", value: "pvphs" },
  // { label: "Palos Verdes High School", value: "pvhs" },

  async function querySchools(keyword) {
    setLoading(true);
    const resp = await axios
      .get(`https://high-schools.com/autoSchools.php?q=${encodeURIComponent(keyword)}&limit=10&timestamp=${Date.now()}`, {
        headers: {
          cookie: `_pk_ref.1.6c64=["","",1677486443,"https://www.google.com/"]; _pk_id.1.6c64=2885ebc79028528a.1677486443.; _pk_ses.1.6c64=1; datadome=6kP1WGb-kzbeRNiOQy62xqVpNzZedSGl~F1NuKvfV03ms6xLjsjJSMuH6mx9lBbMjY4Htt_YFUK22-mtroiFq8NB2lJ61hX9u~KzcTdykQKtmHk_upT58QZVAbIVx_AT`,
          referer: `https://high-schools.com/`,
          "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36`,
          "x-requested-with": "XMLHttpRequest",
        },
      })
      .catch((err) => console.error(err));
    if (resp.data) {
      const sepRow = resp.data.split("\n");
      const formatteditems = sepRow.map((row) => {
        const split = row.split("|");
        return { label: split[0], value: split[1] };
      });
      setItems(formatteditems);
      console.log(sepRow);
    }
    setLoading(false);
  }
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Select school</Text>

      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        loading={loading}
        placeholder="Click to find your school"
        style={{ borderColor: COLORS.light, marginVertical: 10 }}
        placeholderStyle={{ fontSize: 16, fontWeight: "bold", color: COLORS.grey }}
        dropDownContainerStyle={{ borderColor: COLORS.grey }}
        textStyle={{ fontWeight: "bold", fontSize: 16 }}
        onChangeSearchText={(search) => querySchools(search)}
        searchable={true}
        searchTextInputStyle={{ borderWidth: 0 }}
        searchPlaceholder="Search school"
        searchPlaceholderTextColor={COLORS.grey}
        // style
      />

      {value && <Button title="Continue" onPress={() => navigation.navigate("Tabs")} />}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    // padding: 20,
    flex: 1,
    // justifyContent: "center",
    backgroundColor: COLORS.black,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.white,
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
});
export default FindSchool;
