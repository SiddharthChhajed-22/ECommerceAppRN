import React from 'react';
import { Text } from 'react-native';
import { appTextStyles } from './styles';
import type { AppTextProps } from './types';

export const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  style,
  ...rest
}) => {
  const fontSize =
    variant === 'heading' ? 24 : variant === 'subheading' ? 18 : 14;
  const fontWeight =
    variant === 'heading'
      ? '700'
      : variant === 'subheading'
      ? '600'
      : '400';

  return (
    <Text
      style={[
        appTextStyles.base,
        {
          fontSize,
          fontWeight,
        },
        style,
      ]}
      {...rest}
    />
  );
};

