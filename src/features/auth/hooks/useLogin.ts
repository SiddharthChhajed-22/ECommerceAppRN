import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequested } from '../redux/authSlice';
import { RootState } from '../../../app/store/rootReducer';

export const useLogin = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const login = useCallback(
    (email: string, password: string) => {
      dispatch(loginRequested({ email, password }));
    },
    [dispatch],
  );

  return useMemo(
    () => ({
      login,
      loading,
      error,
    }),
    [login, loading, error],
  );
};

