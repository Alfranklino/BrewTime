import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import moment from "moment";
import { Col, Row, Grid } from "react-native-easy-grid";
// import { Icon } from "react-native-elements";
import { Icon } from "native-base";
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
  CardItem
} from "native-base";

function reduceDescription(descr) {
  let mlength = 50;
  let trimmedString =
    descr.length > mlength ? descr.substring(0, mlength - 3) + "..." : descr;

  return trimmedString;
}

const DisplayBooking = props => {
  return (
    <Card style={{ marginBottom: 10, paddingVertical: 10 }}>
      <Grid style={{ alignItems: "center" }}>
        <Col size={3}>
          <TouchableOpacity
            onPress={() =>
              props.s_props.navigation.navigate("BookingDetails", props)
            }
          >
            <Grid style={{ alignItems: "center" }}>
              <Col size={2}>
                <View>
                  <Image
                    source={{ uri: props.singleBooking.images[0].uri }}
                    style={{
                      flex: 1,
                      width: null,
                      height: 80,
                      resizeMode: "contain"
                    }}
                  />
                </View>
              </Col>

              <Col size={4} style={{ justifyContent: "center", marginLeft: 5 }}>
                <View>
                  <Body style={{ alignItems: "flex-start" }}>
                    <Text style={{ fontWeight: "700", fontSize: 18 }}>
                      {props.singleBooking.title}
                    </Text>
                    <Text note>Guide: {props.singleBooking.guide}</Text>
                  </Body>
                </View>
                <View>
                  <Text>
                    {reduceDescription(props.singleBooking.description)}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    type="SimpleLineIcons"
                    name="clock"
                    style={{
                      fontSize: 14,
                      color: "green",
                      marginHorizontal: 8
                    }}
                  />
                  <Text style={{ color: "green", fontSize: 14 }}>
                    {moment(props.singleBooking.time).format(
                      "YYYY-MM-DD, hh:mm"
                    )}
                  </Text>
                </View>
              </Col>
            </Grid>
          </TouchableOpacity>
        </Col>
        <Col size={1}>
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
            onPress={() => props.f_book(props.singleBooking)}
          >
            <Icon
              type="Ionicons"
              name="calendar"
              style={{ fontSize: 16, color: "white", marginHorizontal: 8 }}
            />
            <Text style={{ fontSize: 16, color: "white" }}>Book !</Text>
          </TouchableOpacity>
        </Col>
      </Grid>
    </Card>
  );
};

export default DisplayBooking;
