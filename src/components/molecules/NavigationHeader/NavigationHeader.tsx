import React, { memo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AppText } from '../../atoms/AppText';
import { AppButton } from '../../atoms/AppButton';
import { navigationHeaderStyles } from './styles';
import type { NavigationHeaderProps } from './types';

const NavigationHeaderComponent: React.FC<NavigationHeaderProps> = ({
  title,
  navItems = [],
  onNavPress,
  showBack,
  onBackPress,
  rightComponent,
}) => {
  return (
    <View style={navigationHeaderStyles.container}>
      <View style={navigationHeaderStyles.headerRow}>
        {showBack && (
          <TouchableOpacity onPress={onBackPress} style={navigationHeaderStyles.backButton}>
            <AppText style={navigationHeaderStyles.backText}>Back</AppText>
          </TouchableOpacity>
        )}
        <AppText variant="heading" style={navigationHeaderStyles.title}>
          {title}
        </AppText>
        {rightComponent && (
          <View style={navigationHeaderStyles.rightComponent}>{rightComponent}</View>
        )}
      </View>
      {navItems.length > 0 && (
        <View style={navigationHeaderStyles.navRow}>
          {navItems.map((item, index) => (
            <View
              key={item.screen}
              style={[
                navigationHeaderStyles.navButtonWrapper,
                index > 0 && navigationHeaderStyles.navButtonSpacing,
              ]}
            >
              <AppButton
                label={item.label}
                onPress={() => onNavPress?.(item.screen)}
                style={navigationHeaderStyles.navButton}
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export const NavigationHeader = memo(NavigationHeaderComponent);

