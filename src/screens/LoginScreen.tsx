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

export default function LoginScreen({ navigation }: Props) {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

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
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Access your campus services</Text>
        </View>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Student ID */}
        <Text style={styles.label}>Student ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your student ID number"
          value={studentId}
          onChangeText={setStudentId}
          keyboardType="numeric"
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace("MainTabs")}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Divider */}
        <Text style={styles.orText}>or</Text>

        {/* Google Sign In */}
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../assets/google-icon.png")} // add a google icon
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Sign In with Email</Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signupLink}> Sign Up</Text>
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

  loginButton: {
    backgroundColor: "#0A2F6B",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  forgotText: {
    textAlign: "center",
    marginTop: 12,
    color: "#0A2F6B",
    fontSize: 13,
  },

  orText: {
    textAlign: "center",
    marginVertical: 20,
    color: "#888",
  },

  socialButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  socialText: {
    fontSize: 14,
    color: "#333",
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  signupText: {
    fontSize: 13,
    color: "#333",
  },

  signupLink: {
    fontSize: 13,
    color: "#0A2F6B",
    fontWeight: "600",
  },
});
