import axios from 'axios';

const api_key = '63bb336a32d17a509089f16a';

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
