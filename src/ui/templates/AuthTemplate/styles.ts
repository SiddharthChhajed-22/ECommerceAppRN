import { StyleSheet } from 'react-native';
import { colors } from '../../../core/theme/colors';
import { commonStyles } from '../../../core/theme/commonStyles';

export const authTemplateStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
});

