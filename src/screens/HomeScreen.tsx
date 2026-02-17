import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Title } from '../components/atoms/Typography';
import PrimaryButton from '../components/atoms/PrimaryButton';
import ProductList from '../components/organisms/ProductList';
import { useCart } from '../hooks/useCart';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    const {items } = useCart();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Title style={{ flex: 1 }}>Home</Title>
                <PrimaryButton title={`Cart(${items.length})`}
                    onPress={() => navigation.navigate('Cart')}
                />
            </View>
            <ProductList />
            <View style={styles.footer}>
                <PrimaryButton title='Profile' onPress={() => navigation.navigate('Profile')} />
                <PrimaryButton title='Orders' onPress={() => navigation.navigate('Orders')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f3f4f6' },
    header: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 12,
        backgroundColor: '#fff',
    },
});