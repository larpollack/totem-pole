import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import moves from "../utils/moves";

export default class Level extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: [],
      level: ""
    };
  }
}
