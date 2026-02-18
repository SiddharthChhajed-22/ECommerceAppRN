import React, { memo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AppText } from '../../atoms/AppText';
import { bottomNavBarStyles } from './styles';
import type { BottomNavBarProps } from './types';

const BottomNavBarComponent: React.FC<BottomNavBarProps> = ({ items, onNavPress }) => {
  if (!onNavPress) return null;

  const handlePress = (screen: string) => {
    onNavPress?.(screen);
  };

  return (
    <View style={bottomNavBarStyles.container}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.screen}
          style={bottomNavBarStyles.navItem}
          onPress={() => handlePress(item.screen)}
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          {item.icon ? <AppText style={bottomNavBarStyles.icon}>{item.icon}</AppText> : null}
          <AppText style={bottomNavBarStyles.label}>{item.label}</AppText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const BottomNavBar = memo(BottomNavBarComponent);

