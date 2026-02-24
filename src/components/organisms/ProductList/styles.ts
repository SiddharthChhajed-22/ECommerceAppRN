import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';

export const productListStyles = StyleSheet.create({
  contentContainer: {
    paddingBottom: spacing.xxl,
    paddingHorizontal: 0,
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

