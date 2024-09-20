import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    maxWidth: 400,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    padding: 16,
  },

  boardList: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    padding: 16,
  },
  board: {
    width: 100,
    height: 100,
    backgroundColor: Colors.light.tint,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  boardLabel: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  boardDuration: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    marginLeft: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;
