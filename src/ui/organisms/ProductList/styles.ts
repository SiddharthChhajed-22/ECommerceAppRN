import { StyleSheet } from 'react-native';
import { spacing } from '../../../core/theme/spacing';

export const productListStyles = StyleSheet.create({
  contentContainer: {
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.sm,
  },
  footer: {
    paddingVertical: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
  },
  footerPlaceholder: {
    minHeight: 24,
  },
});

