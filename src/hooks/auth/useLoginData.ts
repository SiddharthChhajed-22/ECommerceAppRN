import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/rootReducer';
import { loginRequested } from '../../../store/auth';

export const useLoginData = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const login = useCallback(
    (email: string, password: string) => {
      dispatch(loginRequested({ email, password }));
    },
    [dispatch],
  );

  return { login, loading, error };
};
