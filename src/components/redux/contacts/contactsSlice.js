import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'contactsAPI';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {}
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchAllContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchAllContacts.fulfilled]: (state, { payload }) => {
      // if (state.isLoading === false) {
      //   return;
      // }
      state.contacts.push(payload);
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;
