import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";
import styles from "./Styles";
import BoardModal from "./BoardModal";
import Button from "@/components/Button";
import { useAppDispatch } from "@/redux/hooks";
import { resetGame } from "@/redux/cardSlice";

type Props = {
  onReset: () => void;
};

const Controller: React.FC<Props> = ({ onReset }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleReset = useCallback(() => {
    onReset();
    dispatch(resetGame());
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Button
          style={styles.button}
          onPress={() => setModalVisible(true)}
          label="Change Board"
        />
        <Button style={styles.button} onPress={handleReset} label="Reset" />
      </View>
      {modalVisible && <BoardModal onClose={() => setModalVisible(false)} />}
    </>
  );
};

export default Controller;
