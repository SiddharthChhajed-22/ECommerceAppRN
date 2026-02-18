import React, { useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { MainTemplate } from '../../../ui/templates/MainTemplate';
import { NavigationHeader } from '../../../ui/molecules/NavigationHeader';
import { CartList } from '../../../ui/organisms/CartList';
import { AppText } from '../../../ui/atoms/AppText';
import { AppButton } from '../../../ui/atoms/AppButton';
import { useCart } from '../hooks/useCart';
import { HARD_CODED } from '../../../core/config/constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../app/navigation/MainNavigator';
import { RootStackParamList } from '../../../app/navigation/AppNavigator';
import { cartStyles } from '../styles/cartStyles';

type CartNavProp = NativeStackNavigationProp<MainStackParamList, 'Cart'>;
type RootNavProp = NativeStackNavigationProp<RootStackParamList>;

export const CartScreen: React.FC = () => {
  const navigation = useNavigation<CartNavProp>();
  const rootNavigation = useNavigation<RootNavProp>();
  const { items, total, emptyCart } = useCart();

  const goToCheckout = useCallback(() => {
    if (items.length === 0) return;
    rootNavigation.navigate('Checkout');
  }, [rootNavigation, items.length]);

  const header = (
    <NavigationHeader
      title="Shopping Cart"
      showBack
      onBackPress={() => navigation.goBack()}
    />
  );

  const content = (
    <ScrollView style={cartStyles.container} contentContainerStyle={cartStyles.contentContainer}>
      {items.length === 0 ? (
        <View style={cartStyles.emptyContainer}>
          <AppText variant="subheading" style={cartStyles.emptyText}>
            Your cart is empty
          </AppText>
          <AppButton
            label="Browse Products"
            onPress={() => navigation.navigate('Home')}
            style={cartStyles.browseButton}
          />
        </View>
      ) : (
        <>
          <View style={cartStyles.cartList}>
            <CartList items={items} />
          </View>
          <View style={cartStyles.footer}>
            <View style={cartStyles.totalContainer}>
              <AppText variant="subheading" style={cartStyles.totalLabel}>
                Total:
              </AppText>
              <AppText variant="heading" style={cartStyles.totalAmount}>
                {HARD_CODED.productCurrency}
                {total.toFixed(2)}
              </AppText>
            </View>
            <AppButton
              label="Proceed to Checkout"
              onPress={goToCheckout}
              disabled={items.length === 0}
              style={cartStyles.checkoutButton}
            />
            <AppButton
              label="Clear Cart"
              onPress={emptyCart}
              disabled={items.length === 0}
              style={cartStyles.clearButton}
            />
          </View>
        </>
      )}
    </ScrollView>
  );

  return <MainTemplate header={header} content={content} />;
};
