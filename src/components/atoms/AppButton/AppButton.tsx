import React, { memo } from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { colors } from '../../../theme/colors';
import { appButtonStyles } from './styles';
import type { AppButtonProps } from './types';

const AppButtonComponent: React.FC<AppButtonProps> = ({
  label,
  onPress,
  disabled,
  loading,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        appButtonStyles.button,
        disabled && appButtonStyles.disabled,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} size="small" />
      ) : (
        <Text style={appButtonStyles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export const AppButton = memo(AppButtonComponent);

