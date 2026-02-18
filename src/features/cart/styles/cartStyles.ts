import { StyleSheet } from 'react-native';
import { colors } from '../../../core/theme/colors';
import { spacing } from '../../../core/theme/spacing';

export const cartStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: spacing.xl,
  },
  cartList: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    minHeight: 300,
  },
  emptyText: {
    color: colors.textSecondary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  browseButton: {
    marginTop: spacing.md,
  },
  footer: {
    backgroundColor: colors.white,
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: spacing.md,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  totalLabel: {
    color: colors.textPrimary,
  },
  totalAmount: {
    color: colors.primary,
  },
  checkoutButton: {
    marginBottom: spacing.sm,
  },
  clearButton: {
    backgroundColor: colors.error,
  },
});
