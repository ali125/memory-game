import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./Styles";

type Props = {
  time: number;
};

const Timer: React.FC<Props> = ({ time }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.timerText, { color: time < 10 ? "red" : "black" }]}>
        {time} seconds
      </Text>
    </View>
  );
};

export default Timer;
