import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../../core/theme/colors';
import { loaderStyles } from './styles';
import type { LoaderProps } from './types';

export const Loader: React.FC<LoaderProps> = () => (
  <View style={loaderStyles.container}>
    <ActivityIndicator color={colors.primary} size="large" />
  </View>
);

