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
              style={{ width: 350, height: 500 }}
              source={require("../../img/pdpolesit.jpg")}
            />
          </View>
          <Text style={styles.moves}>Pole Sit</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 400 }}
              source={require("../../img/pdbackbend.png")}
            />
          </View>
          <Text style={styles.moves}>Backbend</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 400 }}
              source={require("../../img/pdflamingo.jpg")}
            />
          </View>
          <Text style={styles.moves}>Flamingo Stand</Text>
        </ScrollView>
      </View>
    );
  }
}
