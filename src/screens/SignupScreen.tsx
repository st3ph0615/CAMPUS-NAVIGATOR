import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

type Props = {
  navigation: any;
};

export default function SignupScreen({ navigation }: Props) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Header Image + Title */}
      <View style={styles.header}>
        <Image
          source={require("../assets/welcome-image.png")} // replace with your image
          style={styles.headerImage}
          resizeMode="cover"
        />

        <View style={styles.headerOverlay}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Create your campus account</Text>
        </View>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Email / Student ID */}
        <Text style={styles.label}>Email or Student ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your email or student ID number"
          value={identifier}
          onChangeText={setIdentifier}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create a secure password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Confirm Password */}
        <Text style={styles.label}>Re-enter Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Create Account Button */}
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createText}>Create Account</Text>
        </TouchableOpacity>

        {/* Already Have Account */}
        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 220,
    position: "relative",
  },

  headerImage: {
    width: "100%",
    height: "100%",
  },

  headerOverlay: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
  },

  subtitle: {
    fontSize: 14,
    color: "#333333",
    marginTop: 4,
  },

  form: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
    color: "#000",
  },

  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 14,
  },

  createButton: {
    backgroundColor: "#0A2F6B",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },

  createText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  loginText: {
    fontSize: 13,
    color: "#333",
  },

  loginLink: {
    fontSize: 13,
    color: "#0A2F6B",
    fontWeight: "600",
  },
});
