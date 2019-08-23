import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { PurchasesContext } from "../utils/context/context";

import moment from "moment";
import { without, indexOf } from "lodash";

const GET_PRODUCTS = gql`
  {
    getProducts(input: { token: 1, brewery_id: 1 }) {
      id
      object
      active
      caption
      created
      deactivate_on
      images {
        id
        uri
        description
        width
        height
      }
      description
      livemode
      name
      shippable
      updated
      price
      brewery {
        id
        name
      }
    }
  }
`;

const Store = props => {
  const [purchases, setPurchases] = useContext(PurchasesContext);

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error:</Text>;

  const products = data.getProducts;
  // console.log("Products:", products);

  function purchaseProduct(aNewProduct) {
    if (indexOf(purchases, aNewProduct) === -1) {
      let basket = purchases;

      console.log("Purchases-Start", purchases.length);
      basket.push(aNewProduct);
      setPurchases(basket);
      console.log("Purchases-End", purchases.length);
    }
  }

  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text style={Styles.textTitle}>Store</Text>
        <Button
          title="View my Basket"
          onPress={() => props.navigation.navigate("MyBasket", purchases)}
        />
        <View>
          {products.map((prod, i) => (
            <View key={i}>
              <Text>{prod.name}</Text>
              <Text>{prod.price}</Text>
              <Button
                title="View This product Details"
                onPress={() =>
                  props.navigation.navigate("ProductDetails", prod)
                }
              />
              <Button
                title={`Buy this ${prod.name}`}
                onPress={() => purchaseProduct(prod)}
              />
            </View>
          ))}
        </View>
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
    marginTop: 30,
    marginBottom: 10
  },
  textTitle2: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 10
  },
  calendar: {
    ...StyleSheet.absoluteFillObject
  }
});

export default Store;
