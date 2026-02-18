import { StyleSheet } from 'react-native';
import { colors } from '../../../core/theme/colors';
import { spacing } from '../../../core/theme/spacing';

export const cartIconStyles = StyleSheet.create({
  container: {
    padding: spacing.sm,
  },
  iconContainer: {
    position: 'relative',
  },
  icon: {
    fontSize: 24,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: colors.error,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '700',
  },
});

