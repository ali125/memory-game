import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Cards from "@/components/Cards";
import Header from "@/components/Header";
import { useGetCardsQuery } from "@/redux/apiSlice/boardApiSlice";
import { Colors } from "@/constants/Colors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setBoard } from "@/redux/cardSlice";

const Home = () => {
  const { data, isLoading } = useGetCardsQuery();
  const board = useAppSelector((state) => state.card.board);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data && !board) {
      dispatch(setBoard(data[0]));
    }
  }, [data, board]);

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator animating color={Colors.light.tint} size="large" />
    </View>
  ) : board ? (
    <View style={styles.container}>
      <Header />
      <Cards />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
