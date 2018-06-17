import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  Image
} from "react-native";
import styles from "../../../styleSheet";

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Totem Pole</Text>
        <Text style={styles.text}>climb your way to the top</Text>
        <Image
          style={{ width: 550, height: 250 }}
          source={require("../../../img/pdplank.jpg")}
        />
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
