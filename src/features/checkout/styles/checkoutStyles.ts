import { StyleSheet } from 'react-native';
import { spacing } from '../../../core/theme/spacing';
import { colors } from '../../../core/theme/colors';

export const checkoutStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: spacing.xl,
  },
  summarySection: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: 8,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sectionTitle: {
    marginBottom: spacing.md,
    color: colors.textPrimary,
  },
  itemsList: {
    marginBottom: spacing.md,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  itemName: {
    flex: 1,
    color: colors.textPrimary,
  },
  itemPrice: {
    color: colors.textPrimary,
    fontWeight: '600',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.md,
    borderTopWidth: 2,
    borderTopColor: colors.border,
    marginTop: spacing.sm,
  },
  totalLabel: {
    color: colors.textPrimary,
  },
  totalAmount: {
    color: colors.primary,
  },
  actionSection: {
    marginTop: spacing.md,
  },
  confirmButton: {
    marginBottom: spacing.sm,
  },
  successContainer: {
    alignItems: 'center',
    padding: spacing.lg,
  },
  continueButton: {
    marginTop: spacing.md,
  },
  message: {
    marginTop: spacing.md,
  },
  success: {
    color: colors.primary,
  },
  error: {
    color: colors.error,
  },
});
