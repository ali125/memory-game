import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardWrapper: {
    position: "relative",
    minWidth: Dimensions.get("window").width / 3 - 20,
    height: Dimensions.get("window").width / 3 - 20,
    flex: 1,
  },
  card: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
    position: "absolute",
  },
  cardFront: {
    backgroundColor: "skyblue",
  },
  cardBack: {
    backgroundColor: "tomato",
    // transform: [{ rotateY: "180deg" }],
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
});

export default styles;
