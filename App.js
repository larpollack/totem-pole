import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import styles from "./styleSheet";

import CompetitionScreen from "./components/screens/CompetitionScreen";
import RecreationalScreen from "./components/screens/RecreationalScreen";
import { HomeScreen } from "./components/screens/HomeScreen";

export default (AppNavigator = createStackNavigator(
  {
    Recreation: { screen: RecreationalScreen },
    Competition: { screen: CompetitionScreen },
    Home: { screen: HomeScreen }
  },
  { initialRouteName: "Home" }
));
