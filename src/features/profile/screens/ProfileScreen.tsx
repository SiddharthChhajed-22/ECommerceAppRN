import React from 'react';
import { View, ScrollView } from 'react-native';
import { MainTemplate } from '../../../ui/templates/MainTemplate';
import { NavigationHeader } from '../../../ui/molecules/NavigationHeader';
import { ProfileSummary } from '../../../ui/organisms/ProfileSummary';
import { AppButton } from '../../../ui/atoms/AppButton';
import { useProfile } from '../hooks/useProfile';
import { useDispatch } from 'react-redux';
import { logout } from '../../auth/redux/authSlice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../app/navigation/MainNavigator';
import { profileStyles } from '../styles/profileStyles';

type ProfileNavProp = NativeStackNavigationProp<MainStackParamList, 'Profile'>;

export const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileNavProp>();
  const { user } = useProfile();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const header = (
    <NavigationHeader
      title="Profile"
      showBack
      onBackPress={() => navigation.goBack()}
    />
  );

  const content = (
    <ScrollView style={profileStyles.container} contentContainerStyle={profileStyles.contentContainer}>
      <View style={profileStyles.profileSection}>
        <ProfileSummary name={user?.name} email={user?.email} />
      </View>
      <View style={profileStyles.actionsSection}>
        <AppButton
          label="Logout"
          onPress={handleLogout}
          style={profileStyles.logoutButton}
        />
      </View>
    </ScrollView>
  );

  return <MainTemplate header={header} content={content} />;
};
