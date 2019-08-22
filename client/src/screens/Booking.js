import React, { useState, useContext, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { without, indexOf } from "lodash";

import { BookedToursContext } from "../utils/context/context";

import gql from "graphql-tag";

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
  const [bookedTours, setBookedTours] = useContext(BookedToursContext);
  const [bookingsFiltered, setBookingsFiltered] = useState([]);
  const [bookingsAreFiltered, setBookingsAreFiltered] = useState(false);
  const [currentDate, setCurrentDate] = useState();

  const { loading, error, data } = useQuery(GET_BOOKINGS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error:</Text>;

  let bookings = data.getBookings;

  let bookingsTS = []; //An array of all the timeStamps
  let bookingsDates = []; //An array of the previous TimeStamps Converted into dates.

  bookings.map(book => bookingsTS.push(book.time));
  console.log(bookingsTS);

  bookingsTS.map(bTS => bookingsDates.push(moment(bTS).format("YYYY-MM-DD")));

  //Create the list of markers to be displayed inside the database.
  const mark = bookingsDates.reduce(
    (c, v) => Object.assign(c, { [v]: { selected: true, marked: true } }),
    {}
  );

  function setBookingsToDisplay(
    someBookings,
    areFiltered = false,
    aDate = new Date()
  ) {
    console.log("Date:", aDate);
    console.log("Before:", someBookings.length);
    if (areFiltered) {
      setBookingsAreFiltered(true);
      setCurrentDate(aDate);
      setBookingsFiltered(
        someBookings.filter(b => moment(b.time).format("YYYY-MM-DD") == aDate)
      );
      console.log("After:", bookingsFiltered.length);
    } else {
      setBookingsFiltered(someBookings);
      console.log("After:", bookingsFiltered.length);
    }
  }

  function bookATour(aNewTour) {
    if (indexOf(bookedTours, aNewTour) === -1) {
      let tours = bookedTours;

      console.log("Booking-Start", bookedTours);
      tours.push(aNewTour);
      setBookedTours(tours);
      console.log("Booking-End", bookedTours);
    }
  }

  return (
    <ScrollView>
      <Text style={Styles.textTitle}>Booking</Text>
      <View style={{ height: 350 }}>
        <Calendar
          style={Styles.calendar}
          minDate={new Date()}
          markedDates={mark}
          onDayPress={day => {
            setBookingsToDisplay(bookings, true, day.dateString);
            console.log("selected day", day);
          }}
        />
      </View>
      <Button
        title="View my Bookings"
        onPress={() => props.navigation.navigate("MyBookings", bookedTours)}
      />

      <Button
        title="View All Bookings"
        onPress={() => setBookingsToDisplay(bookings, false)}
      />
      {bookingsAreFiltered && (
        <View>
          {bookingsFiltered.map((singleBooking, i) => (
            // Normally all this bloc should go inside a different component
            <View key={i} marginBottom={20}>
              <Text>{singleBooking.title}</Text>
              <Text>{singleBooking.description}</Text>
              <Text>{singleBooking.guide}</Text>
              <Text>
                {moment(singleBooking.time).format("YYYY-MM-DD hh:mm")}
              </Text>
              <Button
                title="View This Tour"
                onPress={() =>
                  props.navigation.navigate("BookingDetails", singleBooking)
                }
              />
              <Button
                title="Book This Tour"
                onPress={() => bookATour(singleBooking)}
              />
            </View>
          ))}
        </View>
      )}
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
