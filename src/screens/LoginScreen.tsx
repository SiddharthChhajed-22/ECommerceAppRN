import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Title, BodyText } from '../components/atoms/Typography';
import TextField from '../components/atoms/TextField';
import PrimaryButton from '../components/atoms/PrimaryButton';
import { useAuth } from '../hooks/useAuth';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
    const { login, loading, error } = useAuth();
    const [email, setEmail] = useState('user@example.com');
    const [password, setPassword] = useState('password123');

    useEffect(() => {
        if (error) {
            Alert.alert('Login Error', error);
        }
    }, [error]);

    const onSubmit = () => {
        if (!email || !password) {
            Alert.alert('Validation', 'Email and password are required.');
            return;
        }
        login(email.trim(), password);
    }

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.select({ ios: 'padding', android: undefined })}>
            <View style={styles.inner}>
                <Title>Welcome Back</Title>
                <BodyText style={{ marginBottom: 16 }}>
                    Login to continue shopping securely.
                </BodyText>
                <TextField
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextField label="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <PrimaryButton
                    title={loading ? 'Logging in...' : 'Login'}
                    onPress={onSubmit}
                />
                <BodyText style={{ marginTop: 20, textAlign: 'center' }}>
                    Don't have an account?
                </BodyText>
                <PrimaryButton
                    title="Go to Signup"
                    onPress={() => navigation.navigate('Signup')}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    inner: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    }
})
