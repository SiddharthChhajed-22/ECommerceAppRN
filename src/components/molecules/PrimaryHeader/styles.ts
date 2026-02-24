import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const primaryHeaderStyles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  title: {
    color: colors.textPrimary,
  },
});

