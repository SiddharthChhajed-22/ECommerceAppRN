import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/rootReducer';

export const useProfile = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return useMemo(
    () => ({
      user,
      isLoggedIn: !!user,
    }),
    [user],
  );
};

