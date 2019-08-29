import React from "react";
import { StyleSheet, Text, View } from "react-native";
// ===== Dependencies =====
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/SimpleLineIcons";
// =====================Apollo & Related=================
import client from "./utils/apolloClient";
import { ApolloProvider } from "react-apollo";
// ===== Components & Utils ======
import { BookedToursProvider } from "./src/utils/context/context";
import { PurchasesProvider } from "./src/utils/context/context";

// ===== Screens ======
import HomeScreen from "./src/screens/Home";
import LocationScreen from "./src/screens/Location";
import BookingScreen from "./src/screens/Booking";
import ViewerBookingsScreen from "./src/screens/ViewerBookings";
import BookingDetailsScreen from "./src/screens/BookingDetails";
import StoreScreen from "./src/screens/Store";
import ViewerBasketScreen from "./src/screens/ViewerBasket";

import ProductDetailsScreen from "./src/screens/ProductDetails";

//------ Navigation ------
const bookingStackNavigator = createStackNavigator({
  Booking: BookingScreen,
  MyBookings: ViewerBookingsScreen,
  BookingDetails: BookingDetailsScreen
});

const storeStackNavigator = createStackNavigator({
  Store: StoreScreen,
  ProductDetails: ProductDetailsScreen,
  MyBasket: ViewerBasketScreen
});

const botTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={24} color={tintColor} />
        )
      }
    },
    Location: {
      screen: LocationScreen,
      navigationOptions: {
        tabBarLabel: "Location",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="location-pin" size={24} color={tintColor} />
        )
      }
    },
    Booking: {
      screen: bookingStackNavigator,
      navigationOptions: {
        tabBarLabel: "Booking",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="calendar" size={24} color={tintColor} />
        )
      }
    },
    Store: {
      screen: storeStackNavigator,
      navigationOptions: {
        tabBarLabel: "Store",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="basket" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "green",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "#E8F1F2"
      }
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        hearderTitle: routeName
      };
    }
  }
);
const AppContainer = createAppContainer(botTabNavigator);

//------ Main Component ------

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PurchasesProvider>
        <BookedToursProvider>
          <AppContainer />
        </BookedToursProvider>
      </PurchasesProvider>
    </ApolloProvider>
  );
}
