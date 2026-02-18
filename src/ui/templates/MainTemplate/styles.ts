import { StyleSheet } from 'react-native';
import { colors } from '../../../core/theme/colors';

export const mainTemplateStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    marginBottom: 0,
  },
  content: {
    flex: 1,
    minHeight: 0,
  },
  footer: {
    backgroundColor: colors.white,
    zIndex: 10,
    elevation: 10,
  },
});

