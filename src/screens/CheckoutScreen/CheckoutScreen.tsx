import React, { useEffect } from 'react';
import { CheckoutTemplate } from '../../components/templates/CheckoutTemplate';
import { useCheckoutData } from '../../hooks/checkout';
import { HARD_CODED } from '../../api/config/constants';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/AppNavigator';

type CheckoutNavProp = NativeStackNavigationProp<RootStackParamList, 'Checkout'>;

export const CheckoutScreen: React.FC = () => {
  const navigation = useNavigation<CheckoutNavProp>();
  const {
    loading,
    success,
    error,
    checkout,
    reset,
    cartItems,
    total,
  } = useCheckoutData();

  useEffect(() => {
    reset();
  }, [reset]);

  const onBack = () => {
    if (success) {
      navigation.navigate('Main');
    } else {
      navigation.goBack();
    }
  };

  return (
    <CheckoutTemplate
      cartItems={cartItems}
      total={total}
      currencySymbol={HARD_CODED.productCurrency}
      loading={loading}
      success={success}
      error={error}
      onConfirm={checkout}
      onContinueShopping={() => navigation.navigate('Main')}
      onBack={onBack}
    />
  );
};
