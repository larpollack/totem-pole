import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight
} from "react-native";
import styles from "../../styleSheet";

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Totem Pole</Text>
        <Button
          style={styles.mode}
          onPress={() => this.props.navigation.navigate("Recreation")}
          title="Recreation Mode"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Competition")}
          title="Competition Mode"
        />
      </View>
    );
  }
}

export default HomeScreen;
