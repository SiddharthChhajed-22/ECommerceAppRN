import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { spacing } from './spacing';

/** Shared layout styles. Content padding applied per-screen, not to header/footer. */
export const commonStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentPadding: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

