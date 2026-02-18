import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { MainTemplate } from '../../../ui/templates/MainTemplate';
import { NavigationHeader } from '../../../ui/molecules/NavigationHeader';
import { AppButton } from '../../../ui/atoms/AppButton';
import { AppText } from '../../../ui/atoms/AppText';
import { useCheckout } from '../hooks/useCheckout';
import { checkoutStyles } from '../styles/checkoutStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../app/navigation/AppNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/rootReducer';
import { HARD_CODED } from '../../../core/config/constants';

type CheckoutNavProp = NativeStackNavigationProp<RootStackParamList, 'Checkout'>;

export const CheckoutScreen: React.FC = () => {
  const navigation = useNavigation<CheckoutNavProp>();
  const { loading, success, error, checkout, reset } = useCheckout();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    reset();
  }, [reset]);

  const handleBack = () => {
    if (success) {
      navigation.navigate('Main');
    } else {
      navigation.goBack();
    }
  };

  const header = (
    <NavigationHeader
      title="Checkout"
      showBack
      onBackPress={handleBack}
    />
  );

  const content = (
    <ScrollView style={checkoutStyles.container} contentContainerStyle={checkoutStyles.contentContainer}>
      <View style={checkoutStyles.summarySection}>
        <AppText variant="subheading" style={checkoutStyles.sectionTitle}>
          Order Summary
        </AppText>
        <View style={checkoutStyles.itemsList}>
          {cartItems.map((item) => (
            <View key={item.id} style={checkoutStyles.itemRow}>
              <AppText style={checkoutStyles.itemName}>{item.name}</AppText>
              <AppText style={checkoutStyles.itemPrice}>
                {HARD_CODED.productCurrency}
                {(item.price * item.quantity).toFixed(2)}
              </AppText>
            </View>
          ))}
        </View>
        <View style={checkoutStyles.totalRow}>
          <AppText variant="subheading" style={checkoutStyles.totalLabel}>
            Total:
          </AppText>
          <AppText variant="heading" style={checkoutStyles.totalAmount}>
            {HARD_CODED.productCurrency}
            {total.toFixed(2)}
          </AppText>
        </View>
      </View>

      <View style={checkoutStyles.actionSection}>
        {success ? (
          <View style={checkoutStyles.successContainer}>
            <AppText style={[checkoutStyles.message, checkoutStyles.success]}>
              Order placed successfully!
            </AppText>
            <AppButton
              label="Continue Shopping"
              onPress={() => navigation.navigate('Main')}
              style={checkoutStyles.continueButton}
            />
          </View>
        ) : (
          <>
            <AppButton
              label={loading ? 'Processing...' : 'Confirm Order'}
              onPress={checkout}
              disabled={loading || cartItems.length === 0}
              style={checkoutStyles.confirmButton}
            />
            {!!error && (
              <AppText style={[checkoutStyles.message, checkoutStyles.error]}>
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
