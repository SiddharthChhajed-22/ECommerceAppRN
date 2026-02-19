import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AuthTemplate } from '../AuthTemplate';
import { PrimaryHeader } from '../../molecules/PrimaryHeader';
import { LabeledInput } from '../../molecules/LabeledInput';
import { AppButton } from '../../atoms/AppButton';
import { AppText } from '../../atoms/AppText';
import { signupTemplateStyles } from './styles';
import type { SignupTemplateProps } from './types';

export const SignupTemplate: React.FC<SignupTemplateProps> = ({
  name,
  email,
  password,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  loading,
  error,
  onLoginPress,
}) => {
  const header = <PrimaryHeader title="Sign Up" />;

  const body = (
    <>
      {!!error && <AppText style={signupTemplateStyles.error}>{error}</AppText>}
      <LabeledInput
        label="Name"
        value={name}
        onChangeText={onNameChange}
        placeholder="Your name"
      />
      <LabeledInput
        label="Email"
        value={email}
        onChangeText={onEmailChange}
        placeholder="you@example.com"
      />
      <LabeledInput
        label="Password"
        value={password}
        onChangeText={onPasswordChange}
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
    <TouchableOpacity onPress={onLoginPress}>
      <AppText style={signupTemplateStyles.footerText}>
        Already have an account?{' '}
        <AppText style={signupTemplateStyles.footerLink}>Login</AppText>
      </AppText>
    </TouchableOpacity>
  );

  return <AuthTemplate header={header} body={body} footer={footer} />;
};
