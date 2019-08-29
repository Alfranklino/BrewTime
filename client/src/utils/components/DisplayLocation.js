import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from "react-native-elements";
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

const DisplayLocation = props => {
  return (
    <Card style={{ marginBottom: 10 }}>
      <CardItem>
        <Body>
          <Text>{props.address}</Text>
          <Text note>SideLaunch</Text>
        </Body>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={props.img}
          style={{
            flex: 1,
            width: null,
            height: 200,
            resizeMode: "contain"
          }}
        />
      </CardItem>
      <CardItem>
        <Text>{props.description}</Text>
      </CardItem>
    </Card>
  );
};

export default DisplayLocation;
