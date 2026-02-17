import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Title, BodyText } from '../components/atoms/Typography';
import PrimaryButton from '../components/atoms/PrimaryButton';
import { useCart } from '../hooks/useCart';
import CartItemRow from '../components/molecules/CartItemRow';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import type { CartItem } from '../types/domain';

type Props = NativeStackScreenProps<RootStackParamList, 'Cart'>;

export default function CartScreen({navigation}: Props) {
    const {items,total,remove,clear } = useCart();

    const renderItem = ({item}: {item:CartItem})=>(
        <CartItemRow item={item} onRemove={remove} />
    )

    return(
        <View style={styles.container}>
            <Title>Cart</Title>
            {items.length === 0 ? (
                <BodyText>Your Cart is empty.</BodyText>
            ): (
                <>
                <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.product.id}
                contentContainerStyle={{paddingVertical:10}}
                />
                <View style={styles.summary}>
                    <Text style={styles.totalText}>Total: $ {total.toFixed(2)}</Text>
                    </View>
                    <PrimaryButton title='Checkout' onPress={()=> navigation.navigate('Checkout')} />
                    <PrimaryButton title='Clear Cart' onPress={clear} />
                </>
            )}
            <PrimaryButton title='Back to Home' onPress={()=>navigation.navigate('Home')} />
        </View>
    )

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  summary: {
    paddingVertical: 8,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e88e5',
  },
});