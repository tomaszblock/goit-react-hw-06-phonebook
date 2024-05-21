import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './Store/Store';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

const AppContent = () => {
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <h1>Contact List</h1>
      <ContactForm />
      <ContactList filter={filter} />
    </div>
  );
};

export const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);
