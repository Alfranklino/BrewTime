import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_BOOKINGS = gql`
  {
    getBookings(input: { token: 1, brewery_id: 1 }) {
      id
      title
      description
      guide
      time
      images {
        id
        uri
        width
        height
      }
    }
  }
`;

const Booking = props => {
  //   const [markers, setMarkers] = useState();

  const { loading, error, data } = useQuery(GET_BOOKINGS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error:</Text>;

  const bookings = data.getBookings;
  let bookingsTS = []; //An array of all the timeStamps
  let bookingsDates = []; //An array of the previous TimeStamps Converted into dates.

  bookings.map(book => bookingsTS.push(book.time));
  console.log(bookingsTS);

  bookingsTS.map(bTS => bookingsDates.push(moment(bTS).format("YYYY-MM-DD")));

  console.log(bookingsDates);
  console.log(moment(bookingsDates[0]).format("YYYY-MM-DD"));
  let d = moment(bookingsDates[0]).format("YYYY-MM-DD");

  const mark = bookingsDates.reduce(
    (c, v) => Object.assign(c, { [v]: { selected: true, marked: true } }),
    {}
  );
  //   setMarkers(mark);
  console.log(mark);

  return (
    <ScrollView>
      <Text style={Styles.textTitle}>Booking</Text>
      <View style={{ height: 350 }}>
        <Calendar
          style={Styles.calendar}
          minDate={new Date()}
          markedDates={mark}
        />
      </View>
      <Button
        title="View my Bookings"
        onPress={() => props.navigation.navigate("MyBookings")}
      />
      {/* <Button
        title="View This Booking Details"
        onPress={() => props.navigation.navigate("BookingDetails")}
      /> */}

      <View>
        {bookings.map((singleBooking, i) => (
          <View key={i} marginBottom={20}>
            <Text>{singleBooking.title}</Text>
            <Text>{singleBooking.description}</Text>
            <Text>{singleBooking.guide}</Text>
            <Text>{moment(singleBooking.time).format("YYYY-MM-DD hh:mm")}</Text>
            <Button
              title="View This Tour"
              onPress={() =>
                props.navigation.navigate("BookingDetails", singleBooking)
              }
            />
            <Button
              title="Book This Tour"
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
