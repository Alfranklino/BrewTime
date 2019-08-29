import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
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

import DisplayLocation from "../utils/components/DisplayLocation";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const BreweriesImgList = [
  { id: 1, path: require("../../assets/Images/img1.jpg") },
  { id: 2, path: require("../../assets/Images/img2.jpg") },
  { id: 3, path: require("../../assets/Images/img3.jpg") }
];

const GET_MAP_DATA = gql`
  {
    getMapData(input: { token: 1, brewery_id: 1 }) {
      latitude
      longitude
      latitudeDelta
      longitudeDelta
      locations {
        id
        address
        description
        latitude
        longitude
      }
    }
  }
`;

function Location() {
  const { loading, error, data } = useQuery(GET_MAP_DATA);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error:</Text>;
  let mapData = data.getMapData;
  let locations = data.getMapData.locations;
  console.log(locations);
  //   let mapData = getCoords();

  //   const setMarkers = () => {
  //     locations.map(loc => {
  //       <Marker
  //         coordinate={
  //           (LatLng = {
  //             latitude: loc.latitude,
  //             longitude: loc.longitude
  //           })
  //         }
  //       />;
  //     });
  //   };
  //   console.log(setMarkers);

  return (
    <Container>
      <Header style={{ backgroundColor: "#E8F1F2" }}>
        <Left />
        <Body>
          <Title>SideLaunch</Title>
          <Subtitle>The best brewery ever</Subtitle>
        </Body>
        <Right>
          <Icon
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
        <View style={{ height: 450 }}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={Styles.map}
            initialRegion={{
              latitude: mapData.latitude,
              longitude: mapData.longitude,
              latitudeDelta: mapData.latitudeDelta,
              longitudeDelta: mapData.longitudeDelta
            }}
            zoomEnabled={true}
            zoomControlEnabled={true}
          >
            {locations.map((loc, i) => (
              <Marker
                key={i}
                coordinate={
                  (LatLng = {
                    latitude: loc.latitude,
                    longitude: loc.longitude
                  })
                }
                title={loc.address}
              />
            ))}
          </MapView>
        </View>
        <Text style={Styles.textTitle2}>Our Locations</Text>
        <View style={{ marginHorizontal: 10 }}>
          {locations.map((loc, i) => (
            <DisplayLocation
              key={i}
              address={loc.address}
              description={loc.description}
              img={BreweriesImgList[i].path}
            />
          ))}
        </View>
      </ScrollView>
    </Container>
  );
}

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
    marginTop: 120,
    marginBottom: 10
  },
  textTitle2: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 10
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default Location;
