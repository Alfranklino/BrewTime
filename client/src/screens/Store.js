import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Store = props => {
  return (
    <View style={Styles.container}>
      <Button
        title="View This product Details"
        onPress={() => props.navigation.navigate("ProductDetails")}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Store;
