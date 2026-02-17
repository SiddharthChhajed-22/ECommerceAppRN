import { useMemo, useCallback } from "react";
import { loginRequest, signupRequest,logout as logoutAction} from '../store/slices/authSlice';

import { useAppDispatch, useAppSelector } from './reduxHooks';



export function useAuth() {
    const dispatch = useAppDispatch();
    const { user, token, loading, error } = useAppSelector(state => state.auth);

    const isAuthenticated = !!token

    const login = useCallback((email: string, password: string) => {
        dispatch(loginRequest({ email, password }));
    }, [dispatch],)

    const signup = useCallback(
    (name: string, email: string, password: string) => {
      dispatch(signupRequest({ name, email, password }));
    },
    [dispatch],
  );

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

    return useMemo(
        () => ({ user, token, loading, error, isAuthenticated, login, signup, logout }),
        [user, token, loading, error, isAuthenticated, login, signup, logout]
    );

}

