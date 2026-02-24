import React from 'react';
import { View } from 'react-native';
import { AppText } from '../../atoms/AppText';
import { primaryHeaderStyles } from './styles';
import type { PrimaryHeaderProps } from './types';

export const PrimaryHeader: React.FC<PrimaryHeaderProps> = ({ title }) => (
  <View style={primaryHeaderStyles.container}>
    <AppText variant="heading" style={primaryHeaderStyles.title}>
      {title}
    </AppText>
  </View>
);

