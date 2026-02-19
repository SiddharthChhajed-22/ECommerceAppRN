import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/rootReducer';
import { signupRequested } from '../../../store/auth';

export const useSignupData = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const signup = useCallback(
    (name: string, email: string, password: string) => {
      dispatch(signupRequested({ name, email, password }));
    },
    [dispatch],
  );

  return { signup, loading, error };
};
