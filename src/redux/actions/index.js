import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from './actionTypes';
import axios from 'axios';

const TICKETS_ROOT = 'https://aviasales-test-api.kata.academy/';
const PORTION = 5;

export const fetchSearchId = createAsyncThunk(actions.fetchSearchId, async () => {
  try {
    const response = await axios.get(TICKETS_ROOT + 'search');
    const { searchId } = response.data;
    localStorage.setItem('searchId', searchId);
    return searchId;
  } catch (error) {
    console.error('Error occurred when receiving SearchId: ', error);
    throw error;
  }
});

export const fetchTickets = createAsyncThunk(actions.fetchTickets, async (_, thunkAPI) => {
  const id = localStorage.getItem('searchId');
  try {
    const response = await axios.get(TICKETS_ROOT + `tickets?searchId=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error occurred when fetching tickets:', error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const ticketsPortion = (tickets, index) => {
  let newPortion = [];
  for (let i = index; i < Math.min(index + PORTION, tickets.length); i++) {
    newPortion.push(tickets[i]);
  }
  return {
    type: actions.ticketsPortion,
    payload: newPortion
  };
};

export const filterTickets = (portionTickets, type, status) => {
  let newArr = [];
  if (type === actions.SORT_TICKET_BY_CHEAP && status) {
    newArr = portionTickets.sort((a, b) => a.price - b.price);
  }
  return {
    type: actions.SORT_TICKET_BY_CHEAP,
    payload: newArr
  };
};
