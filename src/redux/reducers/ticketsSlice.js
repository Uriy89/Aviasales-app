import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as c from '../../constans';

const initialState = {
  tickets: [],
  loading: true,
  loaded: false,
  error: null,
  stop: false,
  sortTickets: [],
  ticketsCount: 5,
  sort: c.SORT_TICKET_BY_CHEAP
};

export const fetchSearchId = createAsyncThunk('fetchSearchId', async () => {
  try {
    const response = await axios.get(c.TICKETS_ROOT_API + 'search');
    const { searchId } = response.data;
    localStorage.setItem('searchId', searchId);
    return searchId;
  } catch (error) {
    console.error('Error occurred when receiving SearchId: ', error);
    throw error;
  }
});

export const fetchTickets = createAsyncThunk('fetchTickets', async (_, thunkAPI) => {
  const id = localStorage.getItem('searchId');
  try {
    const response = await axios.get(c.TICKETS_ROOT_API + `tickets?searchId=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error occurred when fetching tickets:', error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addToTicketsPortion(state) {
      state.ticketsCount += c.TICKETS_COUNT;
    },
    sortTickets(state) {
      if (state.sort === c.SORT_TICKET_BY_CHEAP) {
        state.sortTickets = state.tickets.sort((a, b) => a.price - b.price);
      }
      if (state.sort === c.SORT_TICKET_BY_FAST) {
        state.sortTickets = state.tickets.sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration
        );
      }
      if (state.sort === c.SORT_TICKET_BY_OPTIMAL) {
        state.sortTickets = state.tickets.sort(
          (a, b) => a.price + a.segments[0].duration - (b.price + b.segments[0].duration)
        );
      }
    },
    changeSort(state, action) {
      state.sort = action.payload;
    }
  },
  extraReducers: {
    [fetchTickets.pending]: (state) => {
      (state.loading = true), (state.error = null);
    },
    [fetchTickets.fulfilled]: (state, action) => {
      if (action.payload.tickets.length === 0) {
        state,
          (state.loading = true),
          (state.error = action.error),
          (state.stop = action.payload.stop);
      } else {
        (state.loading = false),
          (state.loaded = true),
          (state.tickets = [...state.tickets, ...action.payload.tickets]),
          (state.error = null),
          (state.stop = action.payload.stop);
      }
    },
    [fetchTickets.rejected]: (state, action) => {
      state.error = action.error;
    }
  }
});

export default ticketsSlice.reducer;
export const { addToTicketsPortion, sortTickets, changeSort } = ticketsSlice.actions;
