import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import styles from "../../styleSheet";

export class RecreationalScreen extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("HomeScreen")}
          title="Home"
        />
        <Text>Now in Recreation Mode</Text>
      </View>
    );
  }
}

export default RecreationalScreen;
