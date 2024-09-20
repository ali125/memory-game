import { BoardResponse } from "@/@types/card.type";
import apiSlice, { TagTypes } from ".";

const boardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query<BoardResponse, void>({
      query: () => "/cards",
      providesTags: [TagTypes.BOARD],
    }),
  }),
});

export const { useGetCardsQuery } = boardApiSlice;

export default boardApiSlice;
