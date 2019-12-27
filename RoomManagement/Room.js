import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Room = props => {
  const { room } = props;
  return (
    <View style={roomStyle.container}>
      <View style={roomStyle.roomContainer}>
        <FontAwesome name="bed" size={30} style={roomStyle.roomIcon} />
        <Text style={roomStyle.roomTitle}>ROOMS</Text>
      </View>
      <View style={roomStyle.roomFunctionPart}>
        <FontAwesome name="minus-circle" size={30} style={roomStyle.roomIcon} />
        <Text style={roomStyle.count}>{room}</Text>
        <FontAwesome
          name="plus-circle"
          size={30}
          style={roomStyle.roomIconPlus}
        />
      </View>
    </View>
  );
};

const roomStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  roomContainer: {
    flexDirection: "row",
    color: "blue",
    width: "50%",
    justifyContent: "flex-start"
  },
  roomIcon: {
    color: "blue",
    marginLeft: 50
  },
  roomTitle: {
    fontSize: 17,
    marginLeft: 6,
    marginTop: 5,
    color: "blue"
  },
  roomFunctionPart: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "flex-end"
  },
  count: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  },
  roomIconPlus: {
    color: "red",
    marginRight: 57
  }
});

export default Room;
