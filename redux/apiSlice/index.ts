import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export enum TagTypes {
  BOARD = "BOARD",
}

const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: Object.values(TagTypes),
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
    credentials: "include", // HttpOnly secure
  }),
  endpoints: () => ({}),
});

export default apiSlice;
