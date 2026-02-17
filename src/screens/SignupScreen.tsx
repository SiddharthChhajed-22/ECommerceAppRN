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
import { useAuth } from '../hooks/useAuth';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export default function SignupScreen({ navigation }: Props) {
  const { signup, loading, error } = useAuth();
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password123');

  useEffect(() => {
    if (error) {
      Alert.alert('Signup Error', error);
    }
  }, [error]);

  const onSubmit = () => {
    if (!name || !email || !password) {
      Alert.alert('Validation', 'All fields are required.');
      return;
    }
    signup(name.trim(), email.trim(), password);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}>
      <View style={styles.inner}>
        <Title>Create Account</Title>
        <BodyText style={{ marginBottom: 16 }}>
          Sign up to start your shopping journey.
        </BodyText>
        <TextField label="Name" value={name} onChangeText={setName} />
        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <PrimaryButton
          title={loading ? 'Signing up...' : 'Sign Up'}
          onPress={onSubmit}
        />
        <BodyText style={{ marginTop: 20, textAlign: 'center' }}>
          Already have an account?
        </BodyText>
        <PrimaryButton
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  inner: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

