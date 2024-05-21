import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../Reducers/ContactsSlice';
import filterReducer from '../Reducers/FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
