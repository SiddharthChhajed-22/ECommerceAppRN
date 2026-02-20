import React from 'react';
import { CartTemplate } from '../../components/templates/CartTemplate';
import { useCartData } from '../../hooks/cart';
import { HARD_CODED } from '../../api/config/constants';

export const CartScreen: React.FC = () => {
  const { items, total, emptyCart, onCheckout, onBrowseProducts, onBack } = useCartData();
  return (
    <CartTemplate
      items={items}
      total={total}
      currencySymbol={HARD_CODED.productCurrency}
      onEmptyCart={emptyCart}
      onBrowseProducts={onBrowseProducts}
      onCheckout={onCheckout}
      onBack={onBack}
    />
  );
};
