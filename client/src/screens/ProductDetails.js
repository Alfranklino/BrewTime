import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductDetails = () => {
  return (
    <View style={Styles.container}>
      <Text>ProductDetails</Text>
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

export default ProductDetails;
