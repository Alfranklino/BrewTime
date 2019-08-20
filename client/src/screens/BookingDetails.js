import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BookingDetail = () => {
  return (
    <View style={Styles.container}>
      <Text>Booking Details</Text>
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

export default BookingDetail;
