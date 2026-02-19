import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AuthTemplate } from '../AuthTemplate';
import { PrimaryHeader } from '../../molecules/PrimaryHeader';
import { LabeledInput } from '../../molecules/LabeledInput';
import { AppButton } from '../../atoms/AppButton';
import { AppText } from '../../atoms/AppText';
import { loginTemplateStyles } from './styles';
import type { LoginTemplateProps } from './types';

export const LoginTemplate: React.FC<LoginTemplateProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  loading,
  error,
  onSignupPress,
}) => {
  const header = <PrimaryHeader title="Login" />;

  const body = (
    <>
      {!!error && <AppText style={loginTemplateStyles.error}>{error}</AppText>}
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
        label={loading ? 'Logging in...' : 'Login'}
        onPress={onSubmit}
      />
    </>
  );

  const footer = (
    <TouchableOpacity onPress={onSignupPress}>
      <AppText style={loginTemplateStyles.footerText}>
        Don&apos;t have an account?{' '}
        <AppText style={loginTemplateStyles.footerLink}>Sign up</AppText>
      </AppText>
    </TouchableOpacity>
  );

  return <AuthTemplate header={header} body={body} footer={footer} />;
};
