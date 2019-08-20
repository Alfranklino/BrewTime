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
// =====================Apollo & Related=================
import client from "./utils/apolloClient";
import { ApolloProvider } from "react-apollo";

// ===== Screens ======
import HomeScreen from "./src/screens/Home";
import LocationScreen from "./src/screens/Location";
import BookingScreen from "./src/screens/Booking";
import StoreScreen from "./src/screens/Store";

//------ Navigation ------
const botTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={24} color={tintColor} />
        )
      }
    },
    Location: {
      screen: LocationScreen,
      navigationOptions: {
        tabBarLabel: "Location",
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="location-pin" size={24} color={tintColor} />
        )
      }
    },
    Booking: {
      screen: BookingScreen,
      navigationOptions: {
        tabBarLabel: "Booking",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="calendar" size={24} color={tintColor} />
        )
      }
    },
    Store: {
      screen: StoreScreen,
      navigationOptions: {
        tabBarLabel: "Store",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="shopping-cart" size={24} color={tintColor} />
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
    }
  }
);

export default createAppContainer(botTabNavigator);

// export function App() {
//   return (
//     <View>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
