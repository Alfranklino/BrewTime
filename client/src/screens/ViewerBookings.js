import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import moment from "moment";
import { sortBy } from "lodash";

import DisplayViewerBooking from "../utils/components/DisplayViewerBooking";
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

const ViewerBookings = props => {
  const viewerBookedTours = props.navigation.state.params;

  let sortedTours = sortBy(viewerBookedTours, function(aTour) {
    return aTour.time;
  });

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

      <ScrollView style={{ height: 200 }}>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 26,
              fontWeight: "bold",
              marginTop: 15,
              marginBottom: 10
            }}
          >
            My Bookings
          </Text>

          {sortedTours.map((bookedTour, i) => (
            <DisplayViewerBooking
              key={i}
              singleBooking={bookedTour}
              s_props={{ ...props }}
            />
          ))}
        </View>
      </ScrollView>
    </Container>
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
