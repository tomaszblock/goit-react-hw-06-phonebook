import { createSlice } from '@reduxjs/toolkit';

// Helper functions to interact with localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('contacts');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('contacts', serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage:", err);
  }
};

const initialState = loadState();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
      saveState(state); 
    },
    deleteContact: (state, action) => {
      const newState = state.filter(contact => contact.id !== action.payload);
      saveState(newState); 
      return newState;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
