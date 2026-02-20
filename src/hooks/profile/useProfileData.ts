import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { MainStackParamList } from '../../navigation/MainNavigator';
import type { RootState } from '../../store/rootReducer';
import { logout } from '../../store/auth';

type ProfileNavProp = NativeStackNavigationProp<MainStackParamList, 'Profile'>;

export const useProfileData = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ProfileNavProp>();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return { user, isLoggedIn: !!user, handleLogout, onBack };
};
