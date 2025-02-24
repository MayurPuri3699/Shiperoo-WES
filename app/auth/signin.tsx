import { Text, View, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false); // For spinner


    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={[styles.container]}>
                    {/* Header Section */}
                    <Text style={styles.header}>Sign in</Text>
                    <Text style={styles.subHeader}>Sign in to start using Shiperoo-WES</Text>

                    {/* Form Section */}
                    <View style={styles.form}>
                        {/* Email Input */}
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.input}
                                placeholder="Enter email"
                                placeholderTextColor="#aaa"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        {/* Password Input */}
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry={!isChecked}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        {/* Additional Links */}
                        <View style={styles.row}>
                            <View style={styles.checkboxContainer}>
                                <TouchableOpacity
                                    style={styles.checkboxContainer}
                                    onPress={() => setChecked(!isChecked)} // Toggle checkbox when text or box is pressed
                                >
                                    <Checkbox
                                        style={styles.checkbox}
                                        value={isChecked}
                                        onValueChange={setChecked} // Toggle checkbox when clicked
                                        color={isChecked ? "#000" : undefined} // Set color to black when checked
                                    />
                                </TouchableOpacity>
                                <Text style={styles.checkboxText}>Show Password</Text>
                            </View>
                        </View>

                        {/* Buttons Section */}
                        <TouchableOpacity
                            style={styles.loginButton}
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? ( // Show spinner or button text based on loading state
                                <ActivityIndicator size="small" color="#fff" />
                            ) : (
                                <Text style={styles.loginButtonText}>Sign in</Text>
                            )}
                        </TouchableOpacity>

                    </View>
                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 5,
    },
    subHeader: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    form: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: "#000",
        fontWeight: "500",
        marginBottom: 5,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#000",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#f9f9f9",
        marginBottom: 15,
        paddingHorizontal: 10,
        height: 48,
    },
    iconContainer: {
        paddingHorizontal: 8,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkboxText: {
        color: "#000",
    },
    checkbox: {
        marginRight: 8,
        width: 20,
        height: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 4,
    },
    forgotPassword: {
        color: "#007bff",
        textDecorationLine: "underline",
    },
    loginButton: {
        backgroundColor: "#000",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 10,
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    googleButton: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    googleButtonText: {
        color: "#000",
        fontSize: 16,
    },
    signupText: {
        textAlign: "center",
        fontSize: 14,
        color: "#666",
    },
    signupLink: {
        color: "#007bff",
        textDecorationLine: "underline",
    },
});