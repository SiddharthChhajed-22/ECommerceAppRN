import React from 'react';
import { View, ScrollView } from 'react-native';
import { MainTemplate } from '../MainTemplate';
import { NavigationHeader } from '../../molecules/NavigationHeader';
import { CartList } from '../../organisms/CartList';
import { AppText } from '../../atoms/AppText';
import { AppButton } from '../../atoms/AppButton';
import { cartTemplateStyles } from './styles';
import type { CartTemplateProps } from './types';

export const CartTemplate: React.FC<CartTemplateProps> = ({
  items,
  total,
  currencySymbol,
  onEmptyCart,
  onRemoveItem,
  onBrowseProducts,
  onCheckout,
  onBack,
}) => {
  const header = (
    <NavigationHeader
      title="Shopping Cart"
      showBack
      onBackPress={onBack}
    />
  );

  const content = (
    <ScrollView
      style={cartTemplateStyles.container}
      contentContainerStyle={cartTemplateStyles.contentContainer}
    >
      {items.length === 0 ? (
        <View style={cartTemplateStyles.emptyContainer}>
          <AppText variant="subheading" style={cartTemplateStyles.emptyText}>
            Your cart is empty
          </AppText>
          <AppButton
            label="Browse Products"
            onPress={onBrowseProducts}
            style={cartTemplateStyles.browseButton}
          />
        </View>
      ) : (
        <>
          <View style={cartTemplateStyles.cartList}>
            <CartList items={items} onRemoveItem={onRemoveItem} />
          </View>
          <View style={cartTemplateStyles.footer}>
            <View style={cartTemplateStyles.totalContainer}>
              <AppText variant="subheading" style={cartTemplateStyles.totalLabel}>
                Total:
              </AppText>
              <AppText variant="heading" style={cartTemplateStyles.totalAmount}>
                {currencySymbol}
                {total.toFixed(2)}
              </AppText>
            </View>
            <AppButton
              label="Proceed to Checkout"
              onPress={onCheckout}
              disabled={items.length === 0}
              style={cartTemplateStyles.checkoutButton}
            />
            <AppButton
              label="Clear Cart"
              onPress={onEmptyCart}
              disabled={items.length === 0}
              style={cartTemplateStyles.clearButton}
            />
          </View>
        </>
      )}
    </ScrollView>
  );

  return <MainTemplate header={header} content={content} />;
};
