import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import PrimaryButton from "../atoms/PrimaryButton";
import type { Product } from "../../types/domain";

type Props = {
    product: Product;
    onAddToCart: (product: Product) => void;
};

function ProductCard({ product, onAddToCart }: Props) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.name}>{product?.name}</Text>
                <Text numberOfLines={2} style={styles.desc}>{product?.description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.footer}>${product?.price}</Text>
                    <PrimaryButton title="Add" onPress={() => onAddToCart(product)} />
                </View>
            </View>
        </View>
    )
}

export default React.memo(ProductCard)

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginVertical: 8,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: '100%',
        height: 160,
    },
    content: {
        padding: 12,
    },
    name: {
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 4,
    },
    desc: {
        fontSize: 13,
        color: '#666',
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1e88e5',
    },
});