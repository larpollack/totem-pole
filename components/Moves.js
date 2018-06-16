import { ListItem, Avatar } from "react-native-elements";
import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { Component } from "react";
import moves from ".././utils/moves";

export default class Moves extends Component {
  render() {
    return (
      <View>
        {moves.map((item, i) => <ListItem key={i} title={item.level} />)}
      </View>
    );
  }
}
