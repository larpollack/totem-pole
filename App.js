import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import styles from "./styleSheet";
import { Provider } from "react-redux";
import store from "./client/store";

import CompetitionScreen from "./client/components/screens/CompetitionScreen";
import RecreationalScreen from "./client/components/screens/RecreationalScreen";
import { HomeScreen } from "./client/components/screens/HomeScreen";
import Intro from "./client/components/Intro";
import Moves from "./client/components/Moves";
import Beginner from "./client/components/Beginner";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export const AppNavigator = createStackNavigator(
  {
    Recreation: { screen: RecreationalScreen },
    Competition: { screen: CompetitionScreen },
    Home: { screen: HomeScreen },
    Intro: { screen: Intro },
    Moves: { screen: Moves },
    Beginner: { screen: Beginner }
  },
  { initialRouteName: "Home" }
);
