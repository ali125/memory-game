import React, { useCallback } from "react";
import { Modal, Text, View, TouchableOpacity } from "react-native";
import styles from "./Styles";
import { useGetCardsQuery } from "@/redux/apiSlice/boardApiSlice";
import { resetGame, setBoard } from "@/redux/cardSlice";
import { BoardItem } from "@/@types/card.type";
import { useAppDispatch } from "@/redux/hooks";

type Props = {
  onClose: () => void;
};

const BoardModal: React.FC<Props> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const { data } = useGetCardsQuery();

  const handleClose = useCallback(() => {
    onClose();
  }, []);

  const handleSelect = useCallback(
    (board: BoardItem) => {
      dispatch(resetGame());
      setTimeout(() => {
        dispatch(setBoard(board));
      }, 500);
      handleClose();
    },
    [handleClose]
  );

  return (
    <Modal
      visible
      animationType="slide"
      transparent={true}
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
  );
};

export default BoardModal;
