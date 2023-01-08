import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'contactsAPI';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
