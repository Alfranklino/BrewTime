import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

//------ Database Calls ------

function getImage() {
  const { loading, error, data } = useQuery(gql`
    {
      getBreweries {
        images {
          id
          uri
          width
          height
        }
      }
    }
  `);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :</Text>;

  console.log(data.getBreweries[0].images);
  imgs = data.getBreweries[0].images;
  console.log(imgs);
  //   return imgs.map(img => <Text key={img.id}>{img.uri}</Text>);
  return imgs[0];
}

//------ Main ------
const Home = () => {
  const img = getImage();
  return (
    <ScrollView scrollEnabled="true">
      <View style={Styles.container}>
        <Text style={Styles.textTitle}>SideLaunch Brew Co</Text>
        <Text style={Styles.textContent}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>

        <Image
          style={{ width: img.width, height: img.height }}
          source={{
            uri: img.uri
          }}
        />

        <Text style={Styles.textContent}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>

        <Image
          style={{ width: img.width, height: img.height }}
          source={{
            uri: img.uri
          }}
        />
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
  textContent: {
    margin: 20,

    textAlign: "justify"
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default Home;
