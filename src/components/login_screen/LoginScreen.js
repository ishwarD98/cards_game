import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Password"
            />

            <Button
                title="Login"
                onPress={() => navigation.navigate('Dashboard')}
            />
            <Button
                title="Create Account"
                onPress={() => navigation.navigate('Register')}
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

export default LoginScreen;