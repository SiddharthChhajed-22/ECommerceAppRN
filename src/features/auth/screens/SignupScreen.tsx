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
import { useSignup } from '../hooks/useSignup';

type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

export const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('New User');
  const [email, setEmail] = useState('new@example.com');
  const [password, setPassword] = useState('password');
  const { signup, loading, error } = useSignup();

  const onSubmit = useCallback(() => {
    signup(name, email, password);
  }, [signup, name, email, password]);

  const header = <PrimaryHeader title="Sign Up" />;

  const body = (
    <>
      {!!error && <AppText style={authStyles.error}>{error}</AppText>}
      <LabeledInput
        label="Name"
        value={name}
        onChangeText={setName}
        placeholder="Your name"
      />
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
      <AppButton
        label={loading ? 'Creating account...' : 'Sign Up'}
        onPress={onSubmit}
      />
    </>
  );

  const footer = (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AppText style={authStyles.footerText}>
        Already have an account?{' '}
        <AppText style={authStyles.footerLink}>Login</AppText>
      </AppText>
    </TouchableOpacity>
  );

  return <AuthTemplate header={header} body={body} footer={footer} />;
};

