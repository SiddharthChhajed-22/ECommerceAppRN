import React, { useState, useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../navigation/AuthNavigator';
import { LoginTemplate } from '../../components/templates/LoginTemplate';
import { useLoginData } from '../../hooks/auth';

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const { login, loading, error } = useLoginData();

  const onSubmit = useCallback(() => {
    login(email, password);
  }, [login, email, password]);

  return (
    <LoginTemplate
      email={email}
      password={password}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
      onSignupPress={() => navigation.navigate('Signup')}
    />
  );
};
