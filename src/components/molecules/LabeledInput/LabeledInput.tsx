import React, { memo } from 'react';
import { View } from 'react-native';
import { AppText } from '../../atoms/AppText';
import { AppInput } from '../../atoms/AppInput';
import { labeledInputStyles } from './styles';
import type { LabeledInputProps } from './types';

const LabeledInputComponent: React.FC<LabeledInputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  placeholder,
}) => {
  return (
    <View style={labeledInputStyles.container}>
      <AppText style={labeledInputStyles.label}>{label}</AppText>
      <AppInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </View>
  );
};

export const LabeledInput = memo(LabeledInputComponent);

