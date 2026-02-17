import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    title: string;
    onPress: () => void;
    disabled?: boolean;
};

function PrimaryButton({ title, onPress, disabled }: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.button, disabled && styles.disabled]}
            activeOpacity={0.8}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(PrimaryButton);

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1e88e5',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 8,
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16
    },
    disabled: {
        backgroundColor: '#90caf9'
    }
})