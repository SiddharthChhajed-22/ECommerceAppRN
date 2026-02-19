import React, { useState, useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../navigation/AuthNavigator';
import { SignupTemplate } from '../../components/templates/SignupTemplate';
import { useSignupData } from '../../hooks/auth';

type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

export const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('New User');
  const [email, setEmail] = useState('new@example.com');
  const [password, setPassword] = useState('password');
  const { signup, loading, error } = useSignupData();

  const onSubmit = useCallback(() => {
    signup(name, email, password);
  }, [signup, name, email, password]);

  return (
    <SignupTemplate
      name={name}
      email={email}
      password={password}
      onNameChange={setName}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
      onLoginPress={() => navigation.goBack()}
    />
  );
};
