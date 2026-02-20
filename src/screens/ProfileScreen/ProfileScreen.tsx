import React from 'react';
import { ProfileTemplate } from '../../components/templates/ProfileTemplate';
import { useProfileData } from '../../hooks/profile';

export const ProfileScreen: React.FC = () => {
  const { user, handleLogout, onBack } = useProfileData();
  return (
    <ProfileTemplate
      userName={user?.name}
      userEmail={user?.email}
      onLogout={handleLogout}
      onBack={onBack}
    />
  );
};
