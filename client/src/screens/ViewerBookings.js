import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewerBookings = () => {
  return (
    <View style={Styles.container}>
      <Text>ViewerBookings</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ViewerBookings;
