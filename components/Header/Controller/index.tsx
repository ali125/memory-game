import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";
import BoardModal from "./BoardModal";

type Props = {};

const Controller: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <BoardModal />
    </View>
  );
};

export default Controller;
