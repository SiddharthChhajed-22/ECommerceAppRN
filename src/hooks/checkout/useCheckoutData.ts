import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/AppNavigator';
import type { RootState } from '../../store/rootReducer';
import { checkoutRequested, resetCheckout } from '../../store/checkout';

type CheckoutNavProp = NativeStackNavigationProp<RootStackParamList, 'Checkout'>;

export const useCheckoutData = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<CheckoutNavProp>();
  const { loading, success, error } = useSelector(
    (state: RootState) => state.checkout,
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const checkout = useCallback(() => {
    dispatch(checkoutRequested());
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch(resetCheckout());
  }, [dispatch]);

  useEffect(() => {
    reset();
  }, [reset]);

  const onBack = useCallback(() => {
    if (success) {
      navigation.navigate('Main');
    } else {
      navigation.goBack();
    }
  }, [navigation, success]);

  const onContinueShopping = useCallback(() => {
    navigation.navigate('Main');
  }, [navigation]);

  return {
    loading,
    success,
    error,
    checkout,
    reset,
    cartItems,
    total,
    onBack,
    onContinueShopping,
  };
};
