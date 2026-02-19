import React, { useCallback } from 'react';
import { CartTemplate } from '../../components/templates/CartTemplate';
import { useCartData } from '../../hooks/cart';
import { HARD_CODED } from '../../api/config/constants';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { MainStackParamList } from '../../navigation/MainNavigator';
import type { RootStackParamList } from '../../navigation/AppNavigator';

type CartNavProp = NativeStackNavigationProp<MainStackParamList, 'Cart'>;
type RootNavProp = NativeStackNavigationProp<RootStackParamList>;

export const CartScreen: React.FC = () => {
  const navigation = useNavigation<CartNavProp>();
  const rootNavigation = useNavigation<RootNavProp>();
  const { items, total, emptyCart } = useCartData();

  const onCheckout = useCallback(() => {
    if (items.length === 0) return;
    rootNavigation.navigate('Checkout');
  }, [rootNavigation, items.length]);

  return (
    <CartTemplate
      items={items}
      total={total}
      currencySymbol={HARD_CODED.productCurrency}
      onEmptyCart={emptyCart}
      onBrowseProducts={() => navigation.navigate('Home')}
      onCheckout={onCheckout}
      onBack={() => navigation.goBack()}
    />
  );
};
