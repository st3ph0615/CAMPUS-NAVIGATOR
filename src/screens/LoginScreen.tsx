import React, { useState } from "react";
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
import { useAuth } from "../navigation/AuthContext";



type Props = {
  navigation: any;
};

export default function LoginScreen({ navigation }: Props) {
  const { signIn } = useAuth();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    // TODO: replace with real auth later
    if (!studentId.trim() || !password) return;
    navigation.replace("MainTabs");
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
            {/* White wash overlay like Figma */}
            <View style={styles.headerWash} />

            <View style={styles.headerOverlay}>
              <Text style={styles.title}>Sign In</Text>
              <Text style={styles.subtitle}>Access your campus services</Text>
            </View>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Text style={styles.label}>Student ID</Text>
            <TextInput
              style={styles.input}
              placeholder="Type your student ID number"
              placeholderTextColor="#8A8A8A"
              value={studentId}
              onChangeText={setStudentId}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Type your password"
              placeholderTextColor="#8A8A8A"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.loginButton} onPress={signIn}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.centerLink}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>or</Text>

            {/* Social button (text + icon on right like Figma) */}
            <TouchableOpacity style={styles.socialButton} activeOpacity={0.85}>
              <Text style={styles.socialText}>Sign In with Email</Text>
              <Image
                source={require("../assets/google-icon.png")}
                style={styles.socialIconRight}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <View style={styles.signupRow}>
              <Text style={styles.signupText}>Don’t have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")} activeOpacity={0.7}>
                <Text style={styles.signupLink}> Sign Up</Text>
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
    borderRadius: 16, // more pill-like
    paddingHorizontal: 18,
    fontSize: 14,
    color: "#000",
    marginBottom: 18,
  },

  loginButton: {
    height: 54,
    backgroundColor: "#0A2F6B",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  centerLink: {
    alignItems: "center",
    marginTop: 16,
  },

  forgotText: {
    color: "#0A2F6B",
    fontSize: 13,
    fontWeight: "600",
  },

  orText: {
    textAlign: "center",
    marginTop: 34,
    marginBottom: 18,
    color: "#8A8A8A",
    fontSize: 12,
  },

  socialButton: {
    height: 52,
    borderWidth: 1,
    borderColor: "#111",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    gap: 14,
  },

  socialText: {
    fontSize: 14,
    color: "#777",
    fontWeight: "600",
  },

  socialIconRight: {
    width: 26,
    height: 26,
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },

  signupText: {
    fontSize: 13,
    color: "#333",
  },

  signupLink: {
    fontSize: 13,
    color: "#0A2F6B",
    fontWeight: "800",
  },
});
