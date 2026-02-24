import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const navigationHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minHeight: 48,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.xs,
  },
  backText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    color: colors.textPrimary,
    textAlign: 'center',
  },
  rightComponent: {
    position: 'absolute',
    right: 0,
  },
  navRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.xs,
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

