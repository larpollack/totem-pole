import {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { Component } from "react";

class AddMoves extends Component {
  constructor() {
    super();
    this.state = { value: null };
  }
  handleChange = text => {
    this.setState({ value: text });
  };
  addMoves = () => {
    this.props.addMoves(this.state.value);
    this.props.hideModal();
    this.setState({ value: null });
  };
  render() {
    let { hideModal } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarButton} />
          <Text style={styles.toolbarTitle}>Add Moves for Your Routine</Text>
          <TouchableOpacity style={styles.toolbarButton} onPress={hideModal}>
            <Text style={styles.toolbarText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            onChangeText={this.handleChange}
            value={this.state.value}
          />
          <TouchableOpacity style={styles.button} onPress={this.addMoves}>
            <Text style={styles.buttonText}>Add Moves</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    height: 40,
    backgroundColor: "#81c04d",
    justifyContent: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20
  },

  toolbar: {
    backgroundColor: "#81c04d",
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: "row"
  },
  toolbarButton: {
    width: 50
  },
  toolbarText: {
    color: "#fff",
    textAlign: "center"
  },
  toolbarTitle: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default AddMoves;
