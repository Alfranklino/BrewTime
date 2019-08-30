import React, { useState, useContext, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";
import { Calendar } from "react-native-calendars";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon as IconHeader } from "react-native-elements";
import { Icon as IconReg } from "native-base";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
  Subtitle,
  Fab,
  // Button,
  Text,
  Badge
} from "native-base";
import moment from "moment";
import { without, indexOf } from "lodash";

import { BookedToursContext } from "../utils/context/context";
import DisplayBooking from "../utils/components/DisplayBooking";

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
    (c, v) =>
      Object.assign(c, {
        [v]: { selected: true, marked: true, selectedColor: "green" }
      }),
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
    <Container>
      <Header style={{ backgroundColor: "#E8F1F2" }}>
        <Left />
        <Body>
          <Title>SideLaunch</Title>
          <Subtitle>The best brewery ever</Subtitle>
        </Body>
        <Right>
          <IconHeader
            raised
            reverse
            name="shopping-cart"
            type="font-awesome"
            color="green"
            onPress={() => console.log("hello")}
          />
          <Badge danger style={{ position: "absolute" }}>
            <Text>2</Text>
          </Badge>
        </Right>
      </Header>

      <ScrollView style={{ zIndex: -99 }}>
        <Text style={Styles.textTitle}>Book a Tour</Text>
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

        {/* <Button
          title="View All Bookings"
          onPress={() => setBookingsToDisplay(bookings, false)}
        /> */}
        {bookingsAreFiltered && (
          <View style={{ marginHorizontal: 5 }}>
            {bookingsFiltered.map((singleBooking, i) => (
              <DisplayBooking
                key={i}
                singleBooking={singleBooking}
                s_props={{ ...props }}
                f_book={bookATour}
              />
            ))}
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("MyBookings", bookedTours)}
      >
        <Badge
          style={{
            backgroundColor: "purple",
            position: "relative",
            left: 370,
            bottom: 50,
            zIndex: 99
          }}
        >
          <Text style={{ fontSize: 13 }}>2</Text>
        </Badge>
        <Fab
          active={true}
          style={{ backgroundColor: "red" }}
          position="bottomRight"
          onPress={() => props.navigation.navigate("MyBookings", bookedTours)}
        >
          <IconReg name="calendar"></IconReg>
        </Fab>
      </TouchableOpacity>
    </Container>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    // marginTop: 120
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
