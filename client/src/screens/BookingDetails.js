import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import moment from "moment";

const BookingDetail = props => {
  const singleBooking = props.navigation.state.params;

  return (
    <View style={Styles.container}>
      <Text>Booking Details</Text>
      <Text>{singleBooking.title}</Text>
      <Text>{singleBooking.description}</Text>
      <Text>{singleBooking.guide}</Text>
      <Text>{moment(singleBooking.time).format("YYYY-MM-DD hh:mm")}</Text>
      <Button
        title="Book This Tour"
        //   onPress={() =>
        //     props.navigation.navigate("BookingDetails", singleBooking)
        //   }
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

export default BookingDetail;
