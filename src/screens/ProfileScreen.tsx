import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { useAuth } from '../hooks/useAuth';
import { BodyText, Subtitle, Title } from '../components/atoms/Typography';
import PrimaryButton from '../components/atoms/PrimaryButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
    const { user, logout } = useAuth();
    return (
        <View style={styles.container}>
            <Title>Profile</Title>
            <View style={styles.card}>
                <Subtitle>Name</Subtitle>
                <BodyText>{user?.name ?? ''}</BodyText>
                <Subtitle style={{ marginTop: 8 }}>Email</Subtitle>
                <BodyText>{user?.email ?? ''}</BodyText>
            </View>
            <PrimaryButton title='Back to Home' onPress={() => navigation.navigate('Home')} />
            <PrimaryButton title='Logout' onPress={logout} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        marginVertical: 20,
    },
});