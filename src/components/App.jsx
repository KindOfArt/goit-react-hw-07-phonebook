import { useDispatch, useSelector } from 'react-redux';
import ContactsForm from './Contacts/ContactsForm/ContactsForm';
import FilterField from './FilterField/FilterField';
import { useEffect } from 'react';
import { fetchAllContacts } from './redux/contacts/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phonebook.contacts);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  console.log(contacts);

  return (
    <main>
      <ContactsForm />
      <br />
      <FilterField />
      <br />
      <div>Contacts List</div>
    </main>
  );
};
