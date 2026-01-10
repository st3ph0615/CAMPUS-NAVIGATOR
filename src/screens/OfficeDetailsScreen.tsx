import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  route: any;
};

export default function OfficeDetailsScreen({ route }: Props) {
  const { officeName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{officeName}</Text>

      <Text style={styles.sectionTitle}>Overview</Text>
      <Text style={styles.text}>
        This office provides important campus services.
      </Text>

      <Text style={styles.sectionTitle}>Office Hours</Text>
      <Text style={styles.text}>Monday – Saturday, 9:00 AM – 4:00 PM</Text>

      <Text style={styles.sectionTitle}>Services</Text>
      <Text style={styles.text}>• Enrollment</Text>
      <Text style={styles.text}>• Document Requests</Text>
      <Text style={styles.text}>• Student Records</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Directions</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#0A2F6B",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    color: "#0A2F6B",
  },

  text: {
    fontSize: 14,
    marginTop: 4,
    color: "#333",
  },

  button: {
    marginTop: 24,
    backgroundColor: "#0A2F6B",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
