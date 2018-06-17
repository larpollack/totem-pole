import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Moves from "../Moves";
import styles from "../../../styleSheet";

export class RecreationalScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("HomeScreen")}
          title="Home"
        />
        <Text>Now in Recreation Mode</Text>
        <Moves navigation={navigate} />
      </View>
    );
  }
}

export default RecreationalScreen;
