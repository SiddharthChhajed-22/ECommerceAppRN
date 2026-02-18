import React, { memo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AppText } from '../AppText';
import { cartIconStyles } from './styles';
import type { CartIconProps } from './types';

const CartIconComponent: React.FC<CartIconProps> = ({ onPress, itemCount = 0 }) => {
  return (
    <TouchableOpacity onPress={onPress} style={cartIconStyles.container} activeOpacity={0.7}>
      <View style={cartIconStyles.iconContainer}>
        <AppText style={cartIconStyles.icon}>🛒</AppText>
        {itemCount > 0 && (
          <View style={cartIconStyles.badge}>
            <AppText style={cartIconStyles.badgeText}>
              {itemCount > 99 ? '99+' : itemCount.toString()}
            </AppText>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export const CartIcon = memo(CartIconComponent);

