import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const productCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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

