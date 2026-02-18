import { StyleSheet } from 'react-native';
import { colors } from '../../../core/theme/colors';
import { spacing } from '../../../core/theme/spacing';

export const navigationHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  backButton: {
    marginRight: spacing.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  backText: {
    color: colors.primary,
    fontSize: 16,
  },
  title: {
    flex: 1,
  },
  rightComponent: {
    marginLeft: spacing.sm,
  },
  navRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  navButtonWrapper: {
    flex: 1,
    minWidth: 100,
  },
  navButtonSpacing: {
    marginLeft: spacing.sm,
  },
  navButton: {
    paddingVertical: spacing.sm,
  },
});

