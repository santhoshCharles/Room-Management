import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Adult = props => {
  const { adult } = props;
  return (
    <View style={adultStyle.container}>
      <View style={adultStyle.adultContainer}>
        <FontAwesome name="user" size={30} style={adultStyle.adultIcon} />
        <Text style={adultStyle.adultTitle}>Adult</Text>
      </View>
      <View style={adultStyle.adultFunctionPart}>
        <FontAwesome
          name="minus-circle"
          size={30}
          style={adultStyle.adultIcon}
        />
        <Text style={adultStyle.count}>{adult}</Text>
        <FontAwesome
          name="plus-circle"
          size={30}
          style={adultStyle.adultIconPlus}
        />
      </View>
    </View>
  );
};

const adultStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%"
  },
  adultContainer: {
    flexDirection: "row",
    color: "blue",
    width: "50%",
    justifyContent: "flex-start"
  },
  adultIcon: {
    color: "blue",
    marginLeft: 60
  },
  adultTitle: {
    fontSize: 17,
    marginLeft: 26,
    marginTop: 5,
    color: "blue"
  },
  adultFunctionPart: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "flex-end",
    marginRight: 15
  },
  count: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  },
  adultIconPlus: {
    color: "red",
    marginRight: 65
  }
});

export default Adult;
