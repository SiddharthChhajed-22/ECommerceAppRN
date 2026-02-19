import React from 'react';
import { ProfileTemplate } from '../../components/templates/ProfileTemplate';
import { useProfileData } from '../../hooks/profile';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { MainStackParamList } from '../../navigation/MainNavigator';

type ProfileNavProp = NativeStackNavigationProp<MainStackParamList, 'Profile'>;

export const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileNavProp>();
  const { user, handleLogout } = useProfileData();

  return (
    <ProfileTemplate
      userName={user?.name}
      userEmail={user?.email}
      onLogout={handleLogout}
      onBack={() => navigation.goBack()}
    />
  );
};
