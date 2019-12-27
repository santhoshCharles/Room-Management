import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Child = props => {
  const { child } = props;
  return (
    <View style={childStyle.container}>
      <View style={childStyle.childContainer}>
        <FontAwesome name="child" size={30} style={childStyle.childIcon} />
        <Text style={childStyle.childTitle}>child</Text>
      </View>
      <View style={childStyle.childFunctionPart}>
        <FontAwesome
          name="minus-circle"
          size={30}
          style={childStyle.childIcon}
        />
        <Text style={childStyle.count}>{child}</Text>
        <FontAwesome
          name="plus-circle"
          size={30}
          style={childStyle.childIconPlus}
        />
      </View>
    </View>
  );
};

const childStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  childContainer: {
    flexDirection: "row",
    color: "blue",
    width: "50%",
    justifyContent: "flex-start"
  },
  childIcon: {
    color: "blue",
    marginLeft: 50
  },
  childTitle: {
    fontSize: 17,
    marginLeft: 26,
    marginTop: 5,
    color: "blue"
  },
  childFunctionPart: {
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
  childIconPlus: {
    color: "red",
    marginRight: 57
  }
});

export default Child;
