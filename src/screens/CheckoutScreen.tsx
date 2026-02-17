import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Title, BodyText } from '../components/atoms/Typography';
import TextField from '../components/atoms/TextField';
import PrimaryButton from '../components/atoms/PrimaryButton';
import { useOrders } from '../hooks/useOrders';
import { useCart } from '../hooks/useCart';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Checkout'>;

export default function CheckoutScreen({ navigation }: Props) {
  const { createOrder, loading, error } = useOrders();
  const { items, total } = useCart();
  const [address, setAddress] = useState('123 Demo Street');
  const [payment, setPayment] = useState('VISA **** 4242');

  useEffect(() => {
    if (error) {
      Alert.alert('Checkout Error', error);
    }
  }, [error]);

  const onSubmit = () => {
    if (items.length === 0) {
      Alert.alert('Cart Empty', 'Add items before checkout.');
      return;
    }
    if (!address || !payment) {
      Alert.alert('Validation', 'Address and payment info are required.');
      return;
    }
    createOrder();
    Alert.alert('Order', 'Order placed successfully!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Orders'),
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}>
      <View style={styles.inner}>
        <Title>Checkout</Title>
        <BodyText style={{ marginBottom: 10 }}>
          Total amount: ${total.toFixed(2)}
        </BodyText>
        <TextField label="Shipping Address" value={address} onChangeText={setAddress} />
        <TextField label="Payment Method" value={payment} onChangeText={setPayment} />
        <PrimaryButton
          title={loading ? 'Placing order...' : 'Place Order'}
          onPress={onSubmit}
        />
        <PrimaryButton title="Back to Cart" onPress={() => navigation.navigate('Cart')} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  inner: { flex: 1, padding: 20, justifyContent: 'center' },
});

