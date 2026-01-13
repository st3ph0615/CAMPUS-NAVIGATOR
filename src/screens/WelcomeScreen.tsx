import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";

type Props = {
  navigation: any;
};

const { width } = Dimensions.get("window");

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>Campus{"\n"}Navigator</Text>

          <Text style={styles.subtitle}>
            Find offices. Complete requests. Share feedback.
          </Text>
        </View>

        {/* Hero image */}
        <View style={styles.imageWrap}>
          <Image
            source={require("../assets/welcome-image.png")}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* Buttons */}
        <View style={styles.buttonWrap}>
          <TouchableOpacity
            style={styles.primaryBtn}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.primaryText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.secondaryText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#9EDAF0",
  },

  container: {
    flex: 1,
    backgroundColor: "#9EDAF0",
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 28,
    justifyContent: "space-between",
  },

  header: {
    alignItems: "center",
    marginTop: 12,
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 10,
  },

  title: {
    fontSize: 40,
    lineHeight: 42,
    fontWeight: "800",
    color: "#0A2F6B",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 18,
    color: "#3B3B3B",
    textAlign: "center",
    opacity: 0.85,
    paddingHorizontal: 12,
  },

  imageWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    marginBottom: 8,
  },

  heroImage: {
    width: width - 48, // full width minus horizontal padding
    height: (width - 48) * 0.62, // aspect ratio similar to design
    borderRadius: 16,
  },

  buttonWrap: {
    gap: 14,
    paddingTop: 10,
  },

  primaryBtn: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#0A2F6B",
    alignItems: "center",
    justifyContent: "center",
  },

  primaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryBtn: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#CFEFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryText: {
    color: "#0A2F6B",
    fontSize: 16,
    fontWeight: "700",
  },
});
