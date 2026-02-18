import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequested } from '../redux/authSlice';
import { RootState } from '../../../app/store/rootReducer';

export const useSignup = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const signup = useCallback(
    (name: string, email: string, password: string) => {
      dispatch(signupRequested({ name, email, password }));
    },
    [dispatch],
  );

  return useMemo(
    () => ({
      signup,
      loading,
      error,
    }),
    [signup, loading, error],
  );
};

