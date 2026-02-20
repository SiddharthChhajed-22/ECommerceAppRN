import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../navigation/AuthNavigator';
import type { RootState } from '../../store/rootReducer';
import { loginRequested } from '../../store/auth';

type LoginNavProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

export const useLoginData = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<LoginNavProp>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');

  const login = useCallback(
    (emailValue: string, passwordValue: string) => {
      dispatch(loginRequested({ email: emailValue, password: passwordValue }));
    },
    [dispatch],
  );

  const onSubmit = useCallback(() => {
    login(email, password);
  }, [login, email, password]);

  const onSignupPress = useCallback(() => {
    navigation.navigate('Signup');
  }, [navigation]);

  return {
    email,
    password,
    onEmailChange: setEmail,
    onPasswordChange: setPassword,
    onSubmit,
    loading,
    error,
    onSignupPress,
  };
};
