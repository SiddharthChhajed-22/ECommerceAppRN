import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../../../theme/commonStyles';
import { mainTemplateStyles } from './styles';
import type { MainTemplateProps } from './types';

/** Root layout: safe area, full-bleed header/footer, padded content. */
export const MainTemplate: React.FC<MainTemplateProps> = ({ header, content, footer }) => {
  return (
    <SafeAreaView style={mainTemplateStyles.safeArea} edges={['top', 'bottom']}>
      <View style={commonStyles.screenContainer}>
        {header ? <View style={mainTemplateStyles.header}>{header}</View> : null}
        <View style={mainTemplateStyles.content}>{content}</View>
        {footer ? <View style={mainTemplateStyles.footer}>{footer}</View> : null}
      </View>
    </SafeAreaView>
  );
};

