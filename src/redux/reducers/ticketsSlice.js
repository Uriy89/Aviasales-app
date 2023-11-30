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
  sort: c.SORT_TICKET_BY_CHEAP,
  filterButtons: [
    { name: c.FILTER_TICKETS_ALL, label: 'Все', check: true },
    { name: c.FILTER_TICKETS_ZERO, label: 'Без пересадок', check: true },
    { name: c.FILTER_TICKETS_ONE, label: '1 пересадка', check: true },
    { name: c.FILTER_TICKETS_TWO, label: '2 пересадки', check: true },
    { name: c.FILTER_TICKETS_THREE, label: '3 пересадки', check: true }
  ],
  err: ''
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
      let sortedTickets = [];
      if (state.sort === c.SORT_TICKET_BY_CHEAP) {
        sortedTickets = state.tickets.sort((a, b) => a.price - b.price);
      }
      if (state.sort === c.SORT_TICKET_BY_FAST) {
        sortedTickets = state.tickets.sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration
        );
      }
      if (state.sort === c.SORT_TICKET_BY_OPTIMAL) {
        sortedTickets = state.tickets.sort(
          (a, b) => a.price + a.segments[0].duration - (b.price + b.segments[0].duration)
        );
      }

      const checkFilterName = state.filterButtons
        .filter((filter) => filter.check)
        .map((filter) => filter.name);

      const resFilter = sortedTickets.filter((ticket) => {
        const transfer = ticket.segments[0].stops.length;
        return (
          checkFilterName.includes(String(transfer)) ||
          checkFilterName.includes(c.FILTER_TICKETS_ALL)
        );
      });
      state.sortTickets = resFilter;
    },
    changeSort(state, action) {
      state.sort = action.payload;
    },
    changeFilter(state, action) {
      const selectedFilter = action.payload;
      const all = state.filterButtons[0];
      if (selectedFilter === c.FILTER_TICKETS_ALL) {
        all.check = !all.check;
        state.filterButtons.slice(1).forEach((button) => {
          button.check = all.check;
        });
      } else {
        const selectedButton = state.filterButtons.find((button) => button.name === selectedFilter);
        if (selectedButton) {
          selectedButton.check = !selectedButton.check;
          all.check = state.filterButtons.slice(1).every((button) => button.check);
        }
      }
    }
  },
  extraReducers: {
    [fetchTickets.pending]: (state) => {
      (state.loading = true), (state.error = null);
    },
    [fetchTickets.fulfilled]: (state, action) => {
      if (action.payload.tickets.length === 0) {
        (state.loading = true), (state.error = action.error), (state.stop = action.payload.stop);
      } else {
        (state.loading = false),
          (state.loaded = true),
          (state.tickets = [...state.tickets, ...action.payload.tickets]),
          (state.error = null),
          (state.stop = action.payload.stop);
      }
    },
    [fetchTickets.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.error.message;
    }
  }
});

export default ticketsSlice.reducer;
export const { addToTicketsPortion, sortTickets, changeSort, filterTickets, changeFilter } =
  ticketsSlice.actions;
