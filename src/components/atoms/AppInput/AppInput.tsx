import React from 'react';
import { TextInput } from 'react-native';
import { colors } from '../../../theme/colors';
import { appInputStyles } from './styles';
import type { AppInputProps } from './types';

export const AppInput: React.FC<AppInputProps> = props => {
  return (
    <TextInput
      style={appInputStyles.input}
      placeholderTextColor={colors.textSecondary}
      {...props}
    />
  );
};

