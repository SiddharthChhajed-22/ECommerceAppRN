import React from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authTemplateStyles } from './styles';
import type { AuthTemplateProps } from './types';

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ header, body, footer }) => {
  return (
    <SafeAreaView style={authTemplateStyles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={authTemplateStyles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={authTemplateStyles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={authTemplateStyles.header}>{header}</View>
          <View style={authTemplateStyles.body}>{body}</View>
          {footer && <View style={authTemplateStyles.footer}>{footer}</View>}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

