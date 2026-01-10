import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Campus Map</Text>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapContainer}>
        <Image
          source={require("../assets/campus-map.png")} // your campus map image
          style={styles.mapImage}
          resizeMode="cover"
        />

        {/* Floating Buttons */}
        <View style={styles.floatingButtons}>
          <TouchableOpacity style={styles.fab}>
            <Text style={styles.fabText}>📍</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fab}>
            <Text style={styles.fabText}>➡️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search buildings, offices, or rooms..."
          style={styles.searchInput}
        />
      </View>

      {/* Quick Filters */}
      <View style={styles.filters}>
        <Text style={styles.filterItem}>Offices</Text>
        <Text style={styles.filterItem}>Buildings</Text>
        <Text style={styles.filterItem}>Facilities</Text>
        <Text style={styles.filterItem}>Admin</Text>
      </View>

      {/* Frequently Visited */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Visited</Text>

        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Text>Registrar’s Office</Text>
          </View>
          <View style={styles.card}>
            <Text>CITC Building</Text>
          </View>
        </View>

        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Text>Ms. Reyes</Text>
          </View>
          <View style={styles.card}>
            <Text>Gymnasium</Text>
          </View>
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
    paddingTop: 50,
    paddingBottom: 12,
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0A2F6B",
  },

  mapContainer: {
    height: 300,
  },

  mapImage: {
    width: "100%",
    height: "100%",
  },

  floatingButtons: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },

  fab: {
    backgroundColor: "#9EDAF0",
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  fabText: {
    fontSize: 20,
  },

  searchContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  },

  searchInput: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
  },

  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 12,
  },

  filterItem: {
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 12,
  },

  section: {
    paddingHorizontal: 16,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
    color: "#0A2F6B",
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#F9F9F9",
    padding: 12,
    borderRadius: 10,
    width: "48%",
  },
});
