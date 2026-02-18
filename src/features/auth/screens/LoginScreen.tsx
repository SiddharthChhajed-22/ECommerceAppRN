import React, { useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../app/navigation/AuthNavigator';
import { AuthTemplate } from '../../../ui/templates/AuthTemplate';
import { PrimaryHeader } from '../../../ui/molecules/PrimaryHeader';
import { LabeledInput } from '../../../ui/molecules/LabeledInput';
import { AppButton } from '../../../ui/atoms/AppButton';
import { AppText } from '../../../ui/atoms/AppText';
import { authStyles } from '../styles/authStyles';
import { useLogin } from '../hooks/useLogin';

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const { login, loading, error } = useLogin();

  const onSubmit = useCallback(() => {
    login(email, password);
  }, [login, email, password]);

  const header = <PrimaryHeader title="Login" />;

  const body = (
    <>
      {!!error && <AppText style={authStyles.error}>{error}</AppText>}
      <LabeledInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="you@example.com"
      />
      <LabeledInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="******"
      />
      <AppButton label={loading ? 'Logging in...' : 'Login'} onPress={onSubmit} />
    </>
  );

  const footer = (
    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
      <AppText style={authStyles.footerText}>
        Don&apos;t have an account?{' '}
        <AppText style={authStyles.footerLink}>Sign up</AppText>
      </AppText>
    </TouchableOpacity>
  );

  return <AuthTemplate header={header} body={body} footer={footer} />;
};

