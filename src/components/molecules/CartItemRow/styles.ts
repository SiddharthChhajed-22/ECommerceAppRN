import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';
import { colors } from '../../../theme/colors';

export const cartItemRowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  leftSection: {
    flex: 1,
    marginRight: spacing.md,
  },
  name: {
    marginBottom: spacing.xs,
    color: colors.textPrimary,
  },
  quantity: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  subtotal: {
    color: colors.primary,
  },
  removeButton: {
    marginTop: spacing.xs,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  removeText: {
    color: colors.error,
    fontSize: 13,
    fontWeight: '600',
  },
});

