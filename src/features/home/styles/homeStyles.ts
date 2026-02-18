import { StyleSheet } from 'react-native';
import { colors } from '../../../core/theme/colors';
import { spacing } from '../../../core/theme/spacing';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  emptyText: {
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
