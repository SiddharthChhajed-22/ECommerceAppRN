import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const labeledInputStyles = StyleSheet.create({
  container: { marginBottom: spacing.md },
  label: {
    marginBottom: spacing.xs,
    color: colors.textPrimary,
    fontWeight: '500',
  },
});

