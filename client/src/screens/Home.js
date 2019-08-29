import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import ScrollImagesH from "../utils/components/ScrollImgsH";
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
  Badge
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
//------ Database Calls ------
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GETBREWERIESQUERY = gql`
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
`;

//------ Main ------
const Home = () => {
  const { loading, error, data } = useQuery(GETBREWERIESQUERY);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :</Text>;

  let imgs = data.getBreweries[0].images;
  console.log(imgs.map(i => i.uri));

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
      <ScrollView scrollEnabled={true} style={{ zIndex: -99 }}>
        <View style={{ height: 130, marginBottom: 15 }}>
          <ScrollView horizontal={true}>
            {imgs.map((img, i) => (
              <ScrollImagesH key={i} uri={img.uri} />
            ))}
          </ScrollView>
        </View>

        <View style={Styles.container}>
          {/* <Text style={Styles.textTitle}>SideLaunch Brew Co</Text> */}
          <Text style={Styles.textContent}>
            Lorem Ipsum is simply text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>

          <Image
            style={{ width: imgs[0].width, height: imgs[0].height }}
            source={{
              uri: imgs[0].uri
            }}
          />

          <Text style={Styles.textContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>

          <Image
            style={{ width: imgs[1].width, height: imgs[1].height }}
            source={{
              uri: imgs[1].uri
            }}
          />
        </View>
      </ScrollView>
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
  textContent: {
    margin: 20,

    textAlign: "justify"
  },
  textTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default Home;
