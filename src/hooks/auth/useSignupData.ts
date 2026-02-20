import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../navigation/AuthNavigator';
import type { RootState } from '../../store/rootReducer';
import { signupRequested } from '../../store/auth';

type SignupNavProp = NativeStackNavigationProp<AuthStackParamList, 'Signup'>;

export const useSignupData = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<SignupNavProp>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [name, setName] = useState('New User');
  const [email, setEmail] = useState('new@example.com');
  const [password, setPassword] = useState('password');

  const signup = useCallback(
    (nameValue: string, emailValue: string, passwordValue: string) => {
      dispatch(signupRequested({ name: nameValue, email: emailValue, password: passwordValue }));
    },
    [dispatch],
  );

  const onSubmit = useCallback(() => {
    signup(name, email, password);
  }, [signup, name, email, password]);

  const onLoginPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    name,
    email,
    password,
    onNameChange: setName,
    onEmailChange: setEmail,
    onPasswordChange: setPassword,
    onSubmit,
    loading,
    error,
    onLoginPress,
  };
};
