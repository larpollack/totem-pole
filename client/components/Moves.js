import { ListItem, Avatar } from "react-native-elements";
import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { Component } from "react";
import {
  INTRO,
  INTERMEDIATE,
  BEGINNER,
  PRO,
  ADVANCED,
  uniqueArr
} from "../../utils/constants";
import { StackNavigator } from "react-navigation";
import store from "../store";

export default class Moves extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  static navigationOptions = {
    title: "Moves"
  };
  render() {
    const navigation = this.props.navigation || {};
    console.log(this.props.navigation);
    return (
      <View>
        <Text>Intro</Text>
        {INTRO.map((move, i) => (
          <ListItem
            key={i}
            title={move.move}
            onPress={() => navigation("Intro")}
          />
        ))}
        <Text>Beginner</Text>
        {BEGINNER.map((move, i) => (
          <ListItem
            key={i}
            title={move.move}
            onPress={() => navigation("Beginner")}
          />
        ))}
      </View>
    );
  }
}
