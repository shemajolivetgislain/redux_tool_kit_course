import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expenses/expenseSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});

// Types for using in components
export type RootState = ReturnType<typeof store.getState>;
