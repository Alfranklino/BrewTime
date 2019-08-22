import React from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import moment from "moment";
import { sortBy } from "lodash";

const ViewerBookings = props => {
  const viewerBookedTours = props.navigation.state.params;

  let sortedTours = sortBy(viewerBookedTours, function(aTour) {
    return aTour.time;
  });

  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text>My Bookings</Text>
        {sortedTours.map((bookedTour, i) => (
          <View key={i}>
            <Text>{bookedTour.title}</Text>
            <Text>{bookedTour.description}</Text>
            <Text>{bookedTour.guide}</Text>
            <Text>{moment(bookedTour.time).format("YYYY-MM-DD hh:mm")}</Text>
            <Button
              title="Cancel This Tour"
              //   onPress={() =>
              //     props.navigation.navigate("BookingDetails", singleBooking)
              //   }
            />
          </View>
        ))}
      </View>
    </ScrollView>
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
