import React from "react";
import { TextInput, StyleSheet,View, Text, type TextInputProps } from "react-native";

type Props = TextInputProps & {
    label?:string;
};

function TextField({label,secureTextEntry,...props}: Props) {
    return (
        <View style={styles.container}>
            {label ? <Text style={styles.label}>{label}</Text> : null}
            <TextInput style={styles.input}
            placeholder="#999"
            secureTextEntry={secureTextEntry}
            {...props}
            />
        </View>
    );
}

export default React.memo(TextField);

const styles = StyleSheet.create({
    container:{
        marginVertical:6
    },
  label: {
      fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    fontSize: 15,
  },
})