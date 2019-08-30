import React, { useContext } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { BookedToursContext } from "../utils/context/context";

import moment from "moment";
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
  Button,
  Text,
  Badge,
  Card,
  CardItem,
  Fab
} from "native-base";

const BookingDetail = props => {
  const [bookedTours, setBookedTours] = useContext(BookedToursContext);
  const singleBooking = props.navigation.state.params.singleBooking;

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
      <View style={{ padding: 8 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "bold",
            marginTop: 15,
            marginBottom: 10
          }}
        >
          Tour Details
        </Text>
        <Card>
          <View style={{ height: 200 }}>
            <Image
              source={{ uri: singleBooking.images[0].uri }}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover"
              }}
            />
          </View>
          <View style={{ padding: 15 }}>
            <Text style={{ fontWeight: "700", fontSize: 20, marginBottom: 8 }}>
              {singleBooking.title}
            </Text>
            <Text note style={{ fontSize: 15, marginBottom: 15 }}>
              Your guide: {singleBooking.guide}
            </Text>
            <Text style={{ fontSize: 18 }}>{singleBooking.description}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 15
              }}
            >
              <IconReg
                type="SimpleLineIcons"
                name="clock"
                style={{
                  fontSize: 18,
                  color: "green",
                  marginHorizontal: 8
                }}
              />
              <Text style={{ fontSize: 18, color: "green" }}>
                {moment(singleBooking.time).format("YYYY-MM-DD, hh:mm")}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                borderRadius: 4,
                padding: 4,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
                shadowOffset: { width: 2, height: 1 },
                shadowColor: "black",
                shadowOpacity: 0.6
              }}
              onPress={() =>
                // console.log(
                //   "HEY::SINGLEBOOKING:",
                //   props.navigation.state.params
                // )
                props.navigation.state.params.f_book(singleBooking)
              }
            >
              <IconReg
                type="Ionicons"
                name="calendar"
                style={{ fontSize: 24, color: "white", marginHorizontal: 8 }}
              />
              <Text style={{ fontSize: 24, color: "white" }}>Book !</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
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
    justifyContent: "center",
    alignItems: "center"
  }
});

export default BookingDetail;
