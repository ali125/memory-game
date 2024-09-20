import { BoardItem } from "@/@types/card.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  board: BoardItem | null;
  selectedCard: any;
  matchedList: any[];
}

const initialState: AuthState = {
  board: null,
  selectedCard: null,
  matchedList: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setSelectedCard: (state, action: PayloadAction<{ card: any }>) => {
      state.selectedCard = action.payload.card;
    },
    setMatched: (state, action: PayloadAction<{ card: any }>) => {
      const selectedCard = state.selectedCard;
      state.matchedList.push(action.payload.card);
      state.matchedList.push(selectedCard);
      state.selectedCard = null;
    },
    resetGame: (state) => {
      state.matchedList = [];
      state.selectedCard = null;
    },
    setBoard: (state, action: PayloadAction<BoardItem>) => {
      state.board = action.payload;
    },
  },
});

export const { setSelectedCard, setMatched, setBoard, resetGame } =
  cardSlice.actions;

export default cardSlice.reducer;
