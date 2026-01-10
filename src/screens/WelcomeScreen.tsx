import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

type Props = {
  navigation: any;
};

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")} // replace with your logo file
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Campus Navigator</Text>
        <Text style={styles.subtitle}>
          Find offices. Complete requests. Share feedback.
        </Text>
      </View>

    
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/welcome-image.png")}
          style={styles.heroImage}
          resizeMode="cover"
        />
      </View>

 
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9EDAF0", // light blue background
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },

  header: {
    alignItems: "center",
    marginTop: 60,
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0A2F6B",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#3B3B3B",
    textAlign: "center",
  },

  imageContainer: {
    alignItems: "center",
    marginVertical: 30,
  },

  heroImage: {
    width: "100%",
    height: 220,
    borderRadius: 16,
  },

  buttonContainer: {
    marginBottom: 40,
  },

  loginButton: {
    backgroundColor: "#0A2F6B",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  signupButton: {
    backgroundColor: "#CFEFFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  signupText: {
    color: "#0A2F6B",
    fontSize: 16,
    fontWeight: "600",
  },
});
