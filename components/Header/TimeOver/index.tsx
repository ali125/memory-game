import React, { useCallback } from "react";
import { Modal, Text, View } from "react-native";
import { resetGame } from "@/redux/cardSlice";
import { useAppDispatch } from "@/redux/hooks";
import styles from "./Styles";
import Button from "@/components/Button";

type Props = {
  onClose: () => void;
};

const TimeOver: React.FC<Props> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const handleReset = useCallback(() => {
    onClose();
    dispatch(resetGame());
  }, []);

  return (
    <Modal visible animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Time Is Over</Text>
          <Button onPress={handleReset} label="Reset" />
        </View>
      </View>
    </Modal>
  );
};

export default TimeOver;
