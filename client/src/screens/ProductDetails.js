import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import moment from "moment";

const ProductsDetails = props => {
  const singleProduct = props.navigation.state.params;

  return (
    <View style={Styles.container}>
      <Text>Product Details</Text>
      <Text>{singleProduct.name}</Text>
      <Text>{singleProduct.price}</Text>
      <Text>{singleProduct.description}</Text>

      <Button
        title="Purchase this Product"
        //   onPress={() =>
        //     props.navigation.navigate("ProductDetails", singleBooking)
        //   }
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

export default ProductsDetails;
