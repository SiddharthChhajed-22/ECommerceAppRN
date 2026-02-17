import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Title, BodyText } from '../components/atoms/Typography';
import PrimaryButton from '../components/atoms/PrimaryButton';
import { useOrders } from '../hooks/useOrders';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import type { Order } from '../types/domain';

type Props = NativeStackScreenProps<RootStackParamList, 'Orders'>;

export default function OrderListScreen({ navigation }: Props) {
  const { list, loadOrders, loading } = useOrders();

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const renderItem = ({ item }: { item: Order }) => (
    <View style={styles.orderCard}>
      <Text style={styles.orderId}>{item.id}</Text>
      <BodyText>
        Items: {item.items.length} • Total: ${item.total.toFixed(2)}
      </BodyText>
      <BodyText>Date: {new Date(item.createdAt).toLocaleString()}</BodyText>
    </View>
  );

  return (
    <View style={styles.container}>
      <Title>Orders</Title>
      {list.length === 0 && !loading ? (
        <BodyText>No orders yet.</BodyText>
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      )}
      <PrimaryButton title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  orderCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  orderId: {
    fontWeight: '700',
    marginBottom: 4,
  },
});

