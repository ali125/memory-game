import React, { useCallback, useState } from "react";
import { Modal, Text, Pressable, View, TouchableOpacity } from "react-native";
import styles from "./Styles";
import { useGetCardsQuery } from "@/redux/apiSlice/boardApiSlice";
import { resetGame, setBoard, setMatched } from "@/redux/cardSlice";
import { BoardItem } from "@/@types/card.type";
import { useAppDispatch } from "@/redux/hooks";

type Props = {};

const BoardModal: React.FC<Props> = ({ onDone }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useAppDispatch();

  const { data } = useGetCardsQuery();

  const handleClose = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleSelect = useCallback(
    (board: BoardItem) => {
      dispatch(resetGame());
      setTimeout(() => {
        dispatch(setBoard(board));
      }, 500);
      handleClose();
    },
    [handleClose, onDone]
  );

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Choice Board</Text>
            <View style={styles.boardList}>
              {(data || []).map((board) => (
                <TouchableOpacity
                  key={board.id}
                  style={styles.board}
                  onPress={() => handleSelect(board)}
                >
                  <View>
                    <Text style={styles.boardLabel}>{board.label}</Text>
                    <Text style={styles.boardDuration}>{board.duration}s</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default BoardModal;
