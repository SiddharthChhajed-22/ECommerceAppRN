import React from "react";
import { Text, StyleSheet, type StyleProp, type TextStyle } from 'react-native';

type Props = {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
};

export function Title({children, style }: Props) {
    return <Text style={[styles.title, style]}>{children}</Text>;
}

export function Subtitle({ children, style }: Props) {
  return <Text style={[styles.subtitle, style]}>{children}</Text>;
}

export function BodyText({ children, style }: Props) {
  return <Text style={[styles.body, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#333',
  },
  body: {
    fontSize: 14,
    color: '#555',
  },
});

