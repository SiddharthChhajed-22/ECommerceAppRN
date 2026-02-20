import React from 'react';
import { CheckoutTemplate } from '../../components/templates/CheckoutTemplate';
import { useCheckoutData } from '../../hooks/checkout';
import { HARD_CODED } from '../../api/config/constants';

export const CheckoutScreen: React.FC = () => {
  const { cartItems, total, loading, success, error, checkout, onContinueShopping, onBack } = useCheckoutData();
  return (
    <CheckoutTemplate
      cartItems={cartItems}
      total={total}
      currencySymbol={HARD_CODED.productCurrency}
      loading={loading}
      success={success}
      error={error}
      onConfirm={checkout}
      onContinueShopping={onContinueShopping}
      onBack={onBack}
    />
  );
};
