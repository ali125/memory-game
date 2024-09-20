import React, { useMemo } from "react";
import { Dimensions, View } from "react-native";
import FlipCard from "../FlipCard";
import styles from "./Styles";
import { useAppSelector } from "@/redux/hooks";

const Cards: React.FC = () => {
  const board = useAppSelector((state) => state.card.board);

  const width = useMemo(
    () => Math.min(Dimensions.get("window").width, 400),
    []
  );

  return (
    <View style={[styles.container, { width }]}>
      {board!.data.map((card) => (
        <FlipCard key={card.id} card={card} />
      ))}
    </View>
  );
};

export default Cards;
