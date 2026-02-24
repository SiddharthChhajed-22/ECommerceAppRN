import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

const BAR_MIN_HEIGHT = 52;
const ICON_SIZE = 20;
const LABEL_SIZE = 11;

export const bottomNavBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    minHeight: BAR_MIN_HEIGHT,
    maxHeight: BAR_MIN_HEIGHT + spacing.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.xs,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xs,
    marginTop: spacing.sm,
  },
  icon: {
    fontSize: ICON_SIZE,
    marginBottom: 2,
  },
  label: {
    fontSize: LABEL_SIZE,
    color: colors.textPrimary,
    fontWeight: '500',
  },
});

