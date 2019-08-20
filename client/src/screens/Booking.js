import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Booking = props => {
  return (
    <View style={Styles.container}>
      <Text>Booking</Text>
      <Button
        title="View my Bookings"
        onPress={() => props.navigation.navigate("MyBookings")}
      />
      <Button
        title="View This Booking Details"
        onPress={() => props.navigation.navigate("BookingDetails")}
      />
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

export default Booking;
