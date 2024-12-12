import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './slices/employeesSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
