import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { MainStackParamList } from '../../navigation/MainNavigator';
import type { RootStackParamList } from '../../navigation/AppNavigator';
import type { RootState } from '../../store/rootReducer';
import { addItem, clearCart, removeItem } from '../../store/cart';

type CartNavProp = NativeStackNavigationProp<MainStackParamList, 'Cart'>;
type RootNavProp = NativeStackNavigationProp<RootStackParamList>;

export const useCartData = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<CartNavProp>();
  const rootNavigation = useNavigation<RootNavProp>();
  const items = useSelector((state: RootState) => state.cart.items);

  const addToCart = useCallback(
    (productId: string) => {
      dispatch(addItem(productId));
    },
    [dispatch],
  );

  const emptyCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const removeCartItem = useCallback(
    (productId: string) => {
      dispatch(removeItem(productId));
    },
    [dispatch],
  );

  const onCheckout = useCallback(() => {
    if (items.length === 0) return;
    rootNavigation.navigate('Checkout');
  }, [rootNavigation, items.length]);

  const onBrowseProducts = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return { items, addToCart, emptyCart, removeCartItem, total, onCheckout, onBrowseProducts, onBack };
};
