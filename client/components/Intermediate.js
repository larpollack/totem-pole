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

export default class Intermediate extends Component {
  static navigationOptions = {
    title: "Intermediate"
  };
  render() {
    // let introPic = INTRO.map(move => move.image);
    return (
      <View>
        <ScrollView>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 250 }}
              source={require("../../img/pdballerina.jpg")}
            />
          </View>
          <Text style={styles.moves}>Ballerina</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 250 }}
              source={require("../../img/pdbutterfly.jpg")}
            />
          </View>
          <Text style={styles.moves}>Butterfly</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 350 }}
              source={require("../../img/pdbuttman.jpg")}
            />
          </View>
          <Text style={styles.moves}>Buttman</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 400 }}
              source={require("../../img/pdembrace.jpg")}
            />
          </View>
          <Text style={styles.moves}>Embrace</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 400 }}
              source={require("../../img/pdgargoyle.jpg")}
            />
          </View>
          <Text style={styles.moves}>Gargoyle</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 450 }}
              source={require("../../img/pdheadstand.jpg")}
            />
          </View>
          <Text style={styles.moves}>Headstand/Forearm Stand</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 500 }}
              source={require("../../img/pdlara.jpg")}
            />
          </View>
          <Text style={styles.moves}>Lara</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 350, height: 400 }}
              source={require("../../img/pdmartini.jpg")}
            />
          </View>
          <Text style={styles.moves}>Martini</Text>
          <View style={styles.item}>
            <Image
              style={{ width: 360, height: 400 }}
              source={require("../../img/pdsuperman.jpg")}
            />
          </View>
          <Text style={styles.moves}>Superman</Text>
        </ScrollView>
      </View>
    );
  }
}
