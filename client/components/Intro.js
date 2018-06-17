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
import { INTRO } from "../../utils/constants";
import styles from "../../styleSheet";

export default class Intro extends Component {
  static navigationOptions = {
    title: "Intro"
  };
  render() {
    // let introPic = INTRO.map(move => move.image);
    return (
      <View>
        <ScrollView>
          <View style={styles.item}>
            <Image
              style={{ width: 400, height: 500 }}
              source={require("../../img/pdpolesit.jpg")}
            />
            <Text>Pole Sit</Text>
          </View>
          <View style={styles.item}>
            <Image
              style={{ width: 400, height: 400 }}
              source={require("../../img/pdbackbend.png")}
            />
            <Text>Backbend</Text>
          </View>
          <View style={styles.item}>
            <Image
              style={{ width: 450, height: 300 }}
              source={require("../../img/pdflamingo.jpg")}
            />
            <Text>Flamingo Stand</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
