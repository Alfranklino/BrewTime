import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

function getCoords() {
  const { loading, error, data } = useQuery(gql`
    {
      getMapData(input: { token: 1, brewery_id: 1 }) {
        latitude
        longitude
        latitudeDelta
        longitudeDelta
      }
    }
  `);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error:</Text>;
  if (!data) {
    return <Text>Loading...</Text>;
  } else {
    let mapData = data.getMapData;
    // console.log(mapData);

    return mapData;
  }
}

function Location() {
  const coords = getCoords();

  console.log(coords);

  return (
    <ScrollView>
      <Text style={Styles.textTitle}>Location</Text>
      <View style={{ height: 300 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={Styles.map}
          initialRegion={{
            latitude: 43.644,
            longitude: -79.39993,
            latitudeDelta: 0.001757,
            longitudeDelta: 0.003866
          }}
          zoomEnabled={true}
          zoomControlEnabled={true}
        >
          <Marker
            coordinate={
              (LatLng = {
                latitude: 43.644,
                longitude: -79.39993
              })
            }
          />
        </MapView>
      </View>
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
  textContent: {
    margin: 20,

    textAlign: "justify"
  },
  textTitle: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 120,
    marginBottom: 10
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default Location;
