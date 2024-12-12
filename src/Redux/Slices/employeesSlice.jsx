import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../Services/api';

// Thunk para buscar dados
export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const response = await api.get('/employees');
    return response.data;
  }
);

// Thunk para adicionar funcionário
export const addEmployee = createAsyncThunk(
  'employees/addEmployee',
  async (newEmployee) => {
    const response = await api.post('/employees', newEmployee);
    return response.data;
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    list: [],
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default employeesSlice.reducer;
