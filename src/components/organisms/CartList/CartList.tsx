import React, { memo } from 'react';
import { View } from 'react-native';
import { CartItemRow } from '../../molecules/CartItemRow';
import { AppText } from '../../atoms/AppText';
import { cartListStyles } from './styles';
import type { CartListProps } from './types';

const CartListComponent: React.FC<CartListProps> = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <View style={cartListStyles.container}>
      <AppText variant="subheading" style={cartListStyles.header}>
        Cart Items ({items.length})
      </AppText>
      {items.map((item) => (
        <View key={item.id} style={cartListStyles.itemWrapper}>
          <CartItemRow
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        </View>
      ))}
    </View>
  );
};

export const CartList = memo(CartListComponent);

