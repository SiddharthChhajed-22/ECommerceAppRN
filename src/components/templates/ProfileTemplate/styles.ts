import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const profileTemplateStyles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { flexGrow: 1, paddingBottom: spacing.xl },
  profileSection: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: 12,
    marginBottom: spacing.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  actionsSection: { marginTop: spacing.lg },
  logoutButton: { backgroundColor: colors.error },
});
