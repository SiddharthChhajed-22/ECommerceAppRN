import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';
import { colors } from '../../../theme/colors';

export const loginTemplateStyles = StyleSheet.create({
  error: { color: colors.error, marginBottom: spacing.sm },
  footerText: { textAlign: 'center' },
  footerLink: { color: colors.primary, fontWeight: '600' },
});
