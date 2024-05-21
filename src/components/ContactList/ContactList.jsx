import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../Reducers/ContactsSlice'
import { setFilter } from '../Reducers/FilterSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Contacts</h2>
      <div>
        <label htmlFor="filter">Filter contacts by name:</label>
        <input
          type="text"
          id="filter"
          name="filter"
          placeholder="Search contacts"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <strong>Name:</strong> {contact.name} <strong>Number:</strong>{' '}
            {contact.number}
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
