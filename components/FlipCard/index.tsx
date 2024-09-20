import React, { useRef, useEffect, useMemo } from "react";
import {
  Text,
  TouchableOpacity,
  Animated,
  useColorScheme,
  Dimensions,
} from "react-native";
import styles from "./Styles";
import { Colors } from "@/constants/Colors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSelectedCard, setMatched } from "@/redux/cardSlice";
import CardIcon from "./CardIcon";

type Props = {
  card: any;
};

const FlipCard: React.FC<Props> = ({ card }) => {
  const flipAnim = useRef(new Animated.Value(0)).current;

  const matchedList = useAppSelector((state) => state.card.matchedList);
  const selectedCard = useAppSelector((state) => state.card.selectedCard);
  const board = useAppSelector((state) => state.card.board);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (matchedList.length === 0) {
      Animated.timing(flipAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [matchedList]);

  useEffect(() => {
    const matched = matchedList.find((m) => m.id === card.id);
    if (!matched && !selectedCard) {
      setTimeout(() => {
        Animated.timing(flipAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 550);
    }
  }, [selectedCard, matchedList]);

  const onSelectCard = () => {
    Animated.timing(flipAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    if (selectedCard) {
      if (selectedCard.key === card.key) {
        dispatch(setMatched({ card }));
      } else {
        dispatch(setSelectedCard({ card: null }));
      }
    } else {
      dispatch(setSelectedCard({ card }));
    }
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const colorScheme = useColorScheme();

  const [row, col] = useMemo(() => (board?.label || "")?.split("x"), [board]);

  const width = useMemo(
    () => Math.min(Dimensions.get("window").width, 400),
    []
  );

  return (
    <TouchableOpacity
      style={[
        styles.cardWrapper,
        {
          minWidth: width / +col - 20,
          minHeight: width / +row - 20,
        },
      ]}
      onPress={onSelectCard}
    >
      <Animated.View
        style={[
          styles.card,
          frontAnimatedStyle,
          styles.cardFront,
          { backgroundColor: Colors[colorScheme ?? "light"].tint },
        ]}
      >
        <Text style={styles.text}>CHECK</Text>
      </Animated.View>
      <Animated.View style={[styles.card, backAnimatedStyle, styles.cardBack]}>
        {/* <Text style={styles.text}>{card.icon}</Text> */}
        <CardIcon name={card.icon} />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default FlipCard;
