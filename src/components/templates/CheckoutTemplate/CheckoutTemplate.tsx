import React from 'react';
import { View, ScrollView } from 'react-native';
import { MainTemplate } from '../MainTemplate';
import { NavigationHeader } from '../../molecules/NavigationHeader';
import { AppButton } from '../../atoms/AppButton';
import { AppText } from '../../atoms/AppText';
import { checkoutTemplateStyles } from './styles';
import type { CheckoutTemplateProps } from './types';

export const CheckoutTemplate: React.FC<CheckoutTemplateProps> = ({
  cartItems,
  total,
  currencySymbol,
  loading,
  success,
  error,
  onConfirm,
  onContinueShopping,
  onBack,
}) => {
  const header = (
    <NavigationHeader
      title="Checkout"
      showBack
      onBackPress={onBack}
    />
  );

  const content = (
    <ScrollView
      style={checkoutTemplateStyles.container}
      contentContainerStyle={checkoutTemplateStyles.contentContainer}
    >
      <View style={checkoutTemplateStyles.summarySection}>
        <AppText variant="subheading" style={checkoutTemplateStyles.sectionTitle}>
          Order Summary
        </AppText>
        <View style={checkoutTemplateStyles.itemsList}>
          {cartItems.map((item) => (
            <View key={item.id} style={checkoutTemplateStyles.itemRow}>
              <AppText style={checkoutTemplateStyles.itemName}>{item.name}</AppText>
              <AppText style={checkoutTemplateStyles.itemPrice}>
                {currencySymbol}
                {(item.price * item.quantity).toFixed(2)}
              </AppText>
            </View>
          ))}
        </View>
        <View style={checkoutTemplateStyles.totalRow}>
          <AppText variant="subheading" style={checkoutTemplateStyles.totalLabel}>
            Total:
          </AppText>
          <AppText variant="heading" style={checkoutTemplateStyles.totalAmount}>
            {currencySymbol}
            {total.toFixed(2)}
          </AppText>
        </View>
      </View>

      <View style={checkoutTemplateStyles.actionSection}>
        {success ? (
          <View style={checkoutTemplateStyles.successContainer}>
            <AppText style={[checkoutTemplateStyles.message, checkoutTemplateStyles.success]}>
              Order placed successfully!
            </AppText>
            <AppButton
              label="Continue Shopping"
              onPress={onContinueShopping}
              style={checkoutTemplateStyles.continueButton}
            />
          </View>
        ) : (
          <>
            <AppButton
              label={loading ? 'Processing...' : 'Confirm Order'}
              onPress={onConfirm}
              disabled={loading || cartItems.length === 0}
              style={checkoutTemplateStyles.confirmButton}
            />
            {!!error && (
              <AppText style={[checkoutTemplateStyles.message, checkoutTemplateStyles.error]}>
                {error}
              </AppText>
            )}
          </>
        )}
      </View>
    </ScrollView>
  );

  return <MainTemplate header={header} content={content} />;
};
