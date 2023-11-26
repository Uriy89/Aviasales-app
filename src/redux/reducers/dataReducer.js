const initialState = {
  tickets: null,
  loading: true,
  loaded: false,
  error: null,
  stop: false,
  portionTickets: [],
  isCheap: true,
  isFast: false,
  isOptimal: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'tickets/fetchTickets/pending':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'tickets/fetchTickets/fulfilled':
      return {
        ...state,
        loading: false,
        loaded: true,
        tickets: action.payload.tickets,
        error: null,
        stop: action.payload.stop
      };
    case 'tickets/fetchSearchId/fulfilled':
      return state;
    case 'ticketsPortion':
      return {
        ...state,
        portionTickets: [...state.portionTickets, ...action.payload]
      };
    case 'SORT_TICKET_BY_CHEAP':
      return {
        ...state,
        portionTickets: action.payload,
        isFast: false,
        isOptimal: false
      };
    default:
      return state;
  }
};

export default dataReducer;
