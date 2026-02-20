import React from 'react';
import { SignupTemplate } from '../../components/templates/SignupTemplate';
import { useSignupData } from '../../hooks/auth';

export const SignupScreen: React.FC = () => {
  const props = useSignupData();
  return <SignupTemplate {...props} />;
};
