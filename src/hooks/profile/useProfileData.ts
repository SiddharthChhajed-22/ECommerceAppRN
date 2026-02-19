import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/rootReducer';
import { logout } from '../../../store/auth';

export const useProfileData = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return { user, isLoggedIn: !!user, handleLogout };
};
