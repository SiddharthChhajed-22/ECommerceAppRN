import React from 'react';
import { LoginTemplate } from '../../components/templates/LoginTemplate';
import { useLoginData } from '../../hooks/auth';

export const LoginScreen: React.FC = () => {
  const props = useLoginData();
  return <LoginTemplate {...props} />;
};
