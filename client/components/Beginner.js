import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import React, { Component } from "react";
import { BEGINNER } from "../../utils/constants";
import styles from "../../styleSheet";

export default class Intro extends Component {
  static navigationOptions = {
    title: "Beginner"
  };
  render() {
    // let introPic = INTRO.map(move => move.image);
    return (
      <View>
        <ScrollView>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 250 }}
              source={require("../../img/pdplank.jpg")}
            />
          </View>
          <Text style={styles.moves}>Plank</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 500 }}
              source={require("../../img/pdcrossknee.jpg")}
            />
          </View>
          <Text style={styles.moves}>Cross Knee Release</Text>
        </ScrollView>
      </View>
    );
  }
}
