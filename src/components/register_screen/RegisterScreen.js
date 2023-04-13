import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Username/Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Mobile no"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Password"
            />
            <Button
                title="Create Account"
                onPress={() => navigation.navigate('Login')}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default RegisterScreen;