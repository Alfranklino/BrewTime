import React from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import { Calendar } from "react-native-calendars";

const Booking = props => {
  return (
    <ScrollView>
      <Text style={Styles.textTitle}>Booking</Text>
      <View style={{ height: 350 }}>
        <Calendar style={Styles.calendar} current={"2019-08-21"} />
      </View>
      <Button
        title="View my Bookings"
        onPress={() => props.navigation.navigate("MyBookings")}
      />
      <Button
        title="View This Booking Details"
        onPress={() => props.navigation.navigate("BookingDetails")}
      />
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120
  },
  sectionAddresses: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  },
  textContent: {
    margin: 20,
    textAlign: "justify"
  },
  textContent2: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 17,
    color: "green",
    textAlign: "justify"
  },
  textTitle: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10
  },
  textTitle2: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 10
  },
  calendar: {
    ...StyleSheet.absoluteFillObject
  }
});

export default Booking;
