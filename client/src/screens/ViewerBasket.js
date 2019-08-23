import React from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import moment from "moment";
import { sortBy } from "lodash";

const ViewerBasket = props => {
  const viewerItems = props.navigation.state.params;

  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text>My Basket</Text>
        {viewerItems.map((item, i) => (
          <View key={i}>
            <Text>{item.name}</Text>

            <Button
              title="Remove This Item"
              //   onPress={() =>
              //     props.navigation.navigate("BookingDetails", singleBooking)
              //   }
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ViewerBasket;
