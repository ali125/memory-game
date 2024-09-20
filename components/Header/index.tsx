import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Timer from "./Timer";
import Controller from "./Controller";
import useTimer from "@/hooks/UserTimer";
import { useAppSelector } from "@/redux/hooks";

const Header: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);

  const board = useAppSelector((state) => state.card.board);
  const selectedCard = useAppSelector((state) => state.card.selectedCard);
  const matchedList = useAppSelector((state) => state.card.matchedList);

  const { time, start, reset } = useTimer();

  useEffect(() => {
    if (!started && selectedCard) {
      setStarted(true);
      start();
    }
  }, [started, selectedCard]);

  useEffect(() => {
    if (matchedList.length === board?.data.length) {
      setStarted(false);
      reset();
    }
  }, [matchedList]);

  return (
    <View style={{ flex: 1 }}>
      <Timer time={time} />
      <Controller />
    </View>
  );
};

export default Header;
