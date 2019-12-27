import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Room from "./RoomManagement/Room";
import Adult from "./RoomManagement/Adult";
import Child from "./RoomManagement/Child";

export default function App() {
  let [room, setRoomCount] = useState(0);
  let [adult, setAdultCount] = useState(0);
  let [child, setChildCount] = useState(0);
  // roomIncrement = roomCount => {};
  // roomDecrement = roomCount => {};
  // adultIncrement = adultCount => {};
  // adultDecrement = adultCount => {};
  // childIncrement = childCount => {};
  // childDecrement = childCount => {};
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <FontAwesome name="users" style={styles.usersIcon} size={30} />
        <Text style={styles.headerText}> Choose number of</Text>
        <Text style={styles.headerTextPeople}> people</Text>
      </View>
      <View style={styles.customer}>
        <View style={{ margin: 10 }}>
          <Room
            room={room}
            roomIncrement={roomIncrement}
            roomDecrement={roomDecrement}
          />
        </View>
        <View>
          <Adult
            adult={adult}
            adultIncrement={adultIncrement}
            adultDecrement={adultDecrement}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Child
            child={child}
            childIncrement={childIncrement}
            childDecrement={childDecrement}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  containerItem: {
    borderColor: "green",
    flexDirection: "row"
  },
  usersIcon: {
    color: "blue"
  },
  headerText: {
    fontSize: 25,
    color: "blue"
  },
  headerTextPeople: {
    fontSize: 25,
    color: "blue",
    fontWeight: "bold"
  },
  customer: {
    width: "90%",
    borderWidth: 2,
    borderColor: "black",
    margin: 10
  }
});
