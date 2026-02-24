import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const productCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: colors.border,
  },
  info: {
    padding: spacing.md,
  },
  name: {
    marginBottom: spacing.sm,
    color: colors.textPrimary,
  },
  priceContainer: {
    marginBottom: spacing.md,
  },
  price: {
    color: colors.primary,
    fontSize: 20,
  },
  button: {
    marginTop: spacing.xs,
  },
});

