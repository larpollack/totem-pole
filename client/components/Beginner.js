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
              style={{ width: 500, height: 350 }}
              source={require("../../img/pdplank.jpg")}
            />
            <Text>Plank</Text>
          </View>
          <View style={styles.item}>
            <Image
              style={{ width: 400, height: 500 }}
              source={require("../../img/pdcrossknee.jpg")}
            />
            <Text>Cross Knee Release</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
