import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchAllContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchAllContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
  },
});

export default contactsSlice.reducer;
