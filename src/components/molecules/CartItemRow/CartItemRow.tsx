import React, { memo } from 'react';
import { View } from 'react-native';
import { AppText } from '../../atoms/AppText';
import { HARD_CODED } from '../../../api/config/constants';
import { cartItemRowStyles } from './styles';
import type { CartItemRowProps } from './types';

const CartItemRowComponent: React.FC<CartItemRowProps> = ({ name, price, quantity }) => {
  const subtotal = price * quantity;

  return (
    <View style={cartItemRowStyles.row}>
      <View style={cartItemRowStyles.leftSection}>
        <AppText variant="subheading" style={cartItemRowStyles.name}>
          {name}
        </AppText>
        <AppText style={cartItemRowStyles.quantity}>
          {HARD_CODED.productCurrency}
          {price.toFixed(2)} × {quantity}
        </AppText>
      </View>
      <View style={cartItemRowStyles.rightSection}>
        <AppText variant="subheading" style={cartItemRowStyles.subtotal}>
          {HARD_CODED.productCurrency}
          {subtotal.toFixed(2)}
        </AppText>
      </View>
    </View>
  );
};

export const CartItemRow = memo(CartItemRowComponent);

