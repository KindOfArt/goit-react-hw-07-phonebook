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
      state.error = null;
      state.items.push(payload);
      // return {
      //   ...state,
      //   items: [...payload],
      //   isLoading: false,
      //   error: null,
      // };
    },
    [fetchAllContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
