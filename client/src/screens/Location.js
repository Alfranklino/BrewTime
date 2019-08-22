import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

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
    <ScrollView>
      <Text style={Styles.textTitle}>Location</Text>
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
      <Text style={Styles.textTitle2}>Our Agencies</Text>
      {locations.map((loc, i) => (
        <View key={i} style={Styles.sectionAddresses}>
          <Text style={Styles.textContent2}>{loc.address}</Text>
          <Text>{loc.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

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
