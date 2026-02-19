import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const profileTemplateStyles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { flexGrow: 1, paddingBottom: spacing.xl },
  profileSection: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: 8,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionsSection: { marginTop: spacing.md },
  logoutButton: { backgroundColor: colors.error },
});
