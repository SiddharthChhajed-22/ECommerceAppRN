import React from 'react';
import { Text } from 'react-native';
import { typography } from '../../../theme/typography';
import { appTextStyles } from './styles';
import type { AppTextProps } from './types';

export const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  style,
  ...rest
}) => {
  const fontStyle = typography[variant] ?? typography.body;
  return (
    <Text
      style={[appTextStyles.base, fontStyle, style]}
      {...rest}
    />
  );
};

