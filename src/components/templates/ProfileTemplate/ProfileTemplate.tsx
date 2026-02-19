import React from 'react';
import { View, ScrollView } from 'react-native';
import { MainTemplate } from '../MainTemplate';
import { NavigationHeader } from '../../molecules/NavigationHeader';
import { ProfileSummary } from '../../organisms/ProfileSummary';
import { AppButton } from '../../atoms/AppButton';
import { profileTemplateStyles } from './styles';
import type { ProfileTemplateProps } from './types';

export const ProfileTemplate: React.FC<ProfileTemplateProps> = ({
  userName,
  userEmail,
  onLogout,
  onBack,
}) => {
  const header = (
    <NavigationHeader
      title="Profile"
      showBack
      onBackPress={onBack}
    />
  );

  const content = (
    <ScrollView
      style={profileTemplateStyles.container}
      contentContainerStyle={profileTemplateStyles.contentContainer}
    >
      <View style={profileTemplateStyles.profileSection}>
        <ProfileSummary name={userName} email={userEmail} />
      </View>
      <View style={profileTemplateStyles.actionsSection}>
        <AppButton
          label="Logout"
          onPress={onLogout}
          style={profileTemplateStyles.logoutButton}
        />
      </View>
    </ScrollView>
  );

  return <MainTemplate header={header} content={content} />;
};
