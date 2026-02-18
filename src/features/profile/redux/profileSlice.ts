import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../auth/redux/authSlice';

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

