import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../atoms/PrimaryButton";
import type { CartItem } from "../../types/domain";

type Props = {
    item: CartItem;
    onRemove: (id: string) => void;
};

function CartItemRow({ item, onRemove }: Props) {
    const { product, quantity } = item;
    return (
        <View style={styles.row}>
            <View style={{ flex: 1 }}>
                <Text style={styles.name}>{product?.name}</Text>
                <Text style={styles.detail}>Qty: {quantity} . ${product?.price}</Text>
            </View>
            <PrimaryButton title="Remove" onPress={() => onRemove(product?.id)} />
        </View>
    )
}

export default React.memo(CartItemRow);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#fff',
        marginBottom: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    name: {
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 2,
    },
    detail: {
        fontSize: 13,
        color: '#555',
    },
});