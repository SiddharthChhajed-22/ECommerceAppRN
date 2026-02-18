import { StyleSheet } from 'react-native';
import { spacing } from '../../../core/theme/spacing';
import { colors } from '../../../core/theme/colors';

export const authStyles = StyleSheet.create({
  error: {
    color: colors.error,
    marginBottom: spacing.sm,
  },
  footerText: {
    textAlign: 'center',
  },
  footerLink: {
    color: colors.primary,
    fontWeight: '600',
  },
});

