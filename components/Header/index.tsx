import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import Timer from "./Timer";
import Controller from "./Controller";
import useTimer from "@/hooks/UserTimer";
import { useAppSelector } from "@/redux/hooks";
import styles from "./Styles";
import TimeOver from "./TimeOver";
import WonModal from "./WonModal";

const Header: React.FC = () => {
  const [isWon, setIsWon] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(false);

  const board = useAppSelector((state) => state.card.board);
  const selectedCard = useAppSelector((state) => state.card.selectedCard);
  const matchedList = useAppSelector((state) => state.card.matchedList);

  const { time, start, reset, stop, isEnd } = useTimer();

  useEffect(() => {
    if (!started && selectedCard) {
      setStarted(true);
      start();
    }
  }, [started, selectedCard]);

  const handleReset = useCallback(() => {
    setIsWon(false);
    setStarted(false);
    reset();
  }, []);

  useEffect(() => {
    if (matchedList.length === board?.data.length) {
      setIsWon(true);
      stop();
    }
  }, [matchedList, handleReset]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Timer time={time} />
        <Controller onReset={handleReset} />
      </View>
      {isEnd && <TimeOver onClose={handleReset} />}
      {isWon && <WonModal onClose={handleReset} />}
    </View>
  );
};

export default Header;
