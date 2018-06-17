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
import styles from "../../styleSheet";

export default class Pro extends Component {
  static navigationOptions = {
    title: "Pro"
  };
  render() {
    // let introPic = INTRO.map(move => move.image);
    return (
      <View>
        <ScrollView>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 300 }}
              source={require("../../img/pdspatchcock.jpg")}
            />
          </View>
          <Text style={styles.moves}>Spatchcock</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 450 }}
              source={require("../../img/pdrainbowmarchenko.jpg")}
            />
          </View>
          <Text style={styles.moves}>Rainbow Marchenko</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 400 }}
              source={require("../../img/pdsuperpain.jpg")}
            />
          </View>
          <Text style={styles.moves}>SuperPain</Text>
        </ScrollView>
      </View>
    );
  }
}
