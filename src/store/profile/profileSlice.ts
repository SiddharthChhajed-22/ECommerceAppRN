import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../auth/authSlice';

type ProfileState = {
  me: User | null;
};

const initialState: ProfileState = {
  me: null,
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<User>) {
      state.me = action.payload;
    },
  },
});

export const { setProfile } = slice.actions;
export default slice.reducer;
