import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Styles";

type Props = {
  label: string;
  style?: any;
  onPress: () => void;
};

const Button: React.FC<Props> = ({ label, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
