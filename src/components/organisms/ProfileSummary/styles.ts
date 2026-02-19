import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';
import { colors } from '../../../theme/colors';

export const profileSummaryStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  avatarText: {
    color: colors.white,
    fontSize: 24,
  },
  info: {
    flex: 1,
  },
  name: {
    marginBottom: spacing.xs,
    color: colors.textPrimary,
  },
  email: {
    color: colors.textSecondary,
    fontSize: 14,
  },
});

