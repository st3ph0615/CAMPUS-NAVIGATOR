import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

type Props = {
  navigation: any;
};

export default function SignupScreen({ navigation }: Props) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return (
      identifier.trim().length > 0 &&
      password.length >= 6 &&
      confirmPassword.length >= 6 &&
      password === confirmPassword
    );
  }, [identifier, password, confirmPassword]);

  const onCreateAccount = () => {
    setError(null);

    if (!identifier.trim()) {
      setError("Please enter your email or student ID.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // TODO: call backend signup later
    // For now, go to Login (or directly to MainTabs if you prefer)
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={styles.safe}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          {/* Header */}
          <View style={styles.header}>
            <Image
              source={require("../assets/welcome-image.png")}
              style={styles.headerImage}
              resizeMode="cover"
            />
            <View style={styles.headerWash} />

            <View style={styles.headerOverlay}>
              <Text style={styles.title}>Sign Up</Text>
              <Text style={styles.subtitle}>Create your campus account</Text>
            </View>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Text style={styles.label}>Email or Student ID</Text>
            <TextInput
              style={styles.input}
              placeholder="Type your email or student ID number"
              placeholderTextColor="#8A8A8A"
              value={identifier}
              onChangeText={setIdentifier}
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Create a secure password"
              placeholderTextColor="#8A8A8A"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Text style={styles.label}>Re-enter Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              placeholderTextColor="#8A8A8A"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={[styles.createButton, !canSubmit && styles.createButtonDisabled]}
              activeOpacity={0.85}
              onPress={onCreateAccount}
              disabled={!canSubmit}
            >
              <Text style={styles.createText}>Create Account</Text>
            </TouchableOpacity>

            <View style={styles.loginRow}>
              <Text style={styles.loginText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")} activeOpacity={0.7}>
                <Text style={styles.loginLink}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scroll: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 220,
    position: "relative",
    backgroundColor: "#EEE",
  },

  headerImage: {
    width: "100%",
    height: "100%",
  },

  headerWash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.65)",
  },

  headerOverlay: {
    position: "absolute",
    bottom: 18,
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#000000",
  },

  subtitle: {
    fontSize: 14,
    color: "#333333",
    marginTop: 6,
    opacity: 0.85,
  },

  form: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 34,
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    color: "#000",
  },

  input: {
    height: 52,
    backgroundColor: "#F2F2F2",
    borderRadius: 16,
    paddingHorizontal: 18,
    fontSize: 14,
    color: "#000",
    marginBottom: 18,
  },

  errorText: {
    color: "#B00020",
    fontSize: 13,
    marginTop: -6,
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "600",
  },

  createButton: {
    height: 54,
    backgroundColor: "#0A2F6B",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },

  createButtonDisabled: {
    opacity: 0.55,
  },

  createText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },

  loginText: {
    fontSize: 13,
    color: "#333",
  },

  loginLink: {
    fontSize: 13,
    color: "#0A2F6B",
    fontWeight: "800",
  },
});
