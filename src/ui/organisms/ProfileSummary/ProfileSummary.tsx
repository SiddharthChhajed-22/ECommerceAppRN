import React from 'react';
import { View } from 'react-native';
import { AppText } from '../../atoms/AppText';
import { profileSummaryStyles } from './styles';
import type { ProfileSummaryProps } from './types';

export const ProfileSummary: React.FC<ProfileSummaryProps> = ({ name, email }) => (
  <View style={profileSummaryStyles.container}>
    <View style={profileSummaryStyles.avatar}>
      <AppText variant="heading" style={profileSummaryStyles.avatarText}>
        {name?.charAt(0).toUpperCase() || 'U'}
      </AppText>
    </View>
    <View style={profileSummaryStyles.info}>
      <AppText variant="heading" style={profileSummaryStyles.name}>
        {name || 'User'}
      </AppText>
      <AppText style={profileSummaryStyles.email}>{email || 'No email provided'}</AppText>
    </View>
  </View>
);

