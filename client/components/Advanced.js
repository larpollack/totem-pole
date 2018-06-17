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

export default class Advanced extends Component {
  static navigationOptions = {
    title: "Advanced"
  };
  render() {
    // let introPic = INTRO.map(move => move.image);
    return (
      <View>
        <ScrollView>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 300 }}
              source={require("../../img/pdshouldermount.jpg")}
            />
          </View>
          <Text style={styles.moves}>Shoulder Mount</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 450 }}
              source={require("../../img/pdchiro.jpg")}
            />
          </View>
          <Text style={styles.moves}>Chiropractor</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 400 }}
              source={require("../../img/pdcocoon.jpg")}
            />
          </View>
          <Text style={styles.moves}>Cocoon</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 400 }}
              source={require("../../img/pdremibridge.jpg")}
            />
          </View>
          <Text style={styles.moves}>Remi Bridge</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 450 }}
              source={require("../../img/pdspidermonkey.jpg")}
            />
          </View>
          <Text style={styles.moves}>Spider Monkey</Text>
        </ScrollView>
      </View>
    );
  }
}
