import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f76593",
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    fontFamily: "Futura",
    fontSize: 30,
    textAlign: "center"
  },
  text: {
    fontFamily: "Futura",
    fontSize: 20,
    color: "#454545"
  },
  mode: {
    fontFamily: "Futura",
    fontSize: 20,
    color: "black",
    textShadowRadius: 5,
    textShadowColor: "darkgray"
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderWidth: 1
  }
});

export default styles;
