import { useDispatch, useSelector } from 'react-redux';
import ContactsForm from './Contacts/ContactsForm/ContactsForm';
import FilterField from './FilterField/FilterField';
import { useEffect } from 'react';
import { fetchAllContacts } from './redux/contacts/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();

  const contactsList = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  console.log(contactsList);

  return (
    <main>
      <ContactsForm />
      <br />
      <FilterField />
      <br />
      <div>
        {/* {contactsList.length > 0 && (
          <ul>
            {contactsList.map(({ id, name, phone }) => (
              <li key={id}>
                <p>{name}</p>
                <p>{phone}</p>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </main>
  );
};
