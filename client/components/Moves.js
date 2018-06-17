import { ListItem, Avatar } from "react-native-elements";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { Component } from "react";
import {
  INTRO,
  INTERMEDIATE,
  BEGINNER,
  PRO,
  ADVANCED,
  uniqueArr
} from "../../utils/constants";
import { StackNavigator } from "react-navigation";
import store from "../store";
import styles from "../../styleSheet";

export default class Moves extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  static navigationOptions = {
    title: "Moves"
  };
  render() {
    const navigation = this.props.navigation || {};
    console.log(this.props.navigation);
    return (
      <View>
        <ScrollView>
          <View>
            <View>
              <Text style={styles.moves}>Intro</Text>
            </View>
            {INTRO.map((move, i) => (
              <ListItem
                key={i}
                title={move.move}
                onPress={() => navigation("Intro")}
              />
            ))}
            <View>
              <Text style={styles.moves}>Beginner</Text>
            </View>
            {BEGINNER.map((move, i) => (
              <ListItem
                key={i}
                title={move.move}
                onPress={() => navigation("Beginner")}
              />
            ))}
            <View>
              <Text style={styles.moves}>Intermediate</Text>
            </View>
            {INTERMEDIATE.map((move, i) => (
              <ListItem
                key={i}
                title={move.move}
                onPress={() => navigation("Intermediate")}
              />
            ))}
            <View>
              <Text style={styles.moves}>Advanced</Text>
            </View>
            {ADVANCED.map((move, i) => (
              <ListItem
                key={i}
                title={move.move}
                onPress={() => navigation("Advanced")}
              />
            ))}
            <View>
              <Text style={styles.moves}>Pro</Text>
            </View>
            {PRO.map((move, i) => (
              <ListItem
                key={i}
                title={move.move}
                onPress={() => navigation("Pro")}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
