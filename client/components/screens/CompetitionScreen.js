import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import styles from "../../../styleSheet";

export class CompetitionScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.mode}>Now in Competition Mode</Text>
        <View>
          <Text>Enter planned moves</Text>
        </View>
      </View>
    );
  }
}

export default CompetitionScreen;
