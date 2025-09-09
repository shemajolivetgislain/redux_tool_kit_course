import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expenses/expenseSlice";
import { apiSlice } from "../api/apiEntry";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Types for using in components
export type RootState = ReturnType<typeof store.getState>;
