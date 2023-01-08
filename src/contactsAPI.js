import axios from 'axios';

const api_key = '63b2ad1b5e490925c51e5125';

axios.defaults.baseURL = `https://${api_key}.mockapi.io`;

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(newContact) {
  await axios.post('/contacts', newContact);
}

export async function deleteContact(contactId) {
  await axios.delete(`/contacts/${contactId}`);
}
