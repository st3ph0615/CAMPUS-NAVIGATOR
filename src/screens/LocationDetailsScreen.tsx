import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

type Props = {
  route: any;
};

export default function LocationDetailsScreen({ route }: Props) {
  const { officeName } = route.params;
  const [activeTab, setActiveTab] = useState<"Overview" | "About" | "Process">("Overview");

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <Image
        source={require("../assets/registrar-banner.png")}
        style={styles.banner}   
        resizeMode="cover"
      />

      {/* Title & Rating */}
      <View style={styles.headerContent}>
        <Text style={styles.title}>{officeName}</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>4.4 ★★★★☆</Text>
          <TouchableOpacity>
            <Text style={styles.viewRatings}>View Ratings</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TabButton title="Overview" active={activeTab === "Overview"} onPress={() => setActiveTab("Overview")} />
        <TabButton title="About" active={activeTab === "About"} onPress={() => setActiveTab("About")} />
        <TabButton title="Process Guide" active={activeTab === "Process"} onPress={() => setActiveTab("Process")} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {activeTab === "Overview" && <OverviewTab />}
        {activeTab === "About" && <AboutTab />}
        {activeTab === "Process" && <ProcessTab />}
      </View>
    </View>
  );
}

function OverviewTab() {
  return (
    <View>
      <InfoRow label="Status" value="Closed • Opens 9AM Monday – Saturday" />
      <InfoRow label="Facebook" value="facebook.com" />
      <InfoRow label="Phone" value="(639) 127 789 4567" />
      <InfoRow label="Website" value="ustp.edu.ph/cdeo" />
    </View>
  );
}

function AboutTab() {
  return (
    <View>
      <Text style={styles.sectionTitle}>Service Options</Text>
      <Text>• On-site processing (enrollment, document requests)</Text>
      <Text>• Online services (TOR, certifications, ID requests)</Text>
      <Text>• In-office pickup</Text>

      <Text style={styles.sectionTitle}>Planning</Text>
      <Text>• Quick visit processing</Text>
      <Text>• Appointment scheduling available</Text>
      <Text>• Peak-hour advisory</Text>

      <Text style={styles.sectionTitle}>Payments</Text>
      <Text>• Cash payments</Text>
    </View>
  );
}

function ProcessTab() {
  return (
    <View>
      <Text style={styles.sectionTitle}>1. Choose a Transaction</Text>
      <Text>• Transcript of Records (TOR)</Text>
      <Text>• Good Moral Certificate</Text>
      <Text>• Enrollment Verification</Text>
      <Text>• Honorable Dismissal</Text>
      <Text>• ID Replacement</Text>
      <Text>• Document Authentication</Text>

      <Text style={styles.sectionTitle}>2. Payment</Text>
      <Text>• Cash payments</Text>
      <Text>• Appointment scheduling available</Text>
    </View>
  );
}

function TabButton({ title, active, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.tabButton, active && styles.activeTab]}>
      <Text style={[styles.tabText, active && styles.activeTabText]}>{title}</Text>
    </TouchableOpacity>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  banner: {
    width: "100%",
    height: 200,
  },

  headerContent: {
    padding: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0A2F6B",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  rating: {
    fontSize: 14,
    marginRight: 10,
  },

  viewRatings: {
    color: "#0A2F6B",
    fontWeight: "600",
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },

  tabButton: {
    paddingVertical: 12,
  },

  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#9EDAF0",
  },

  tabText: {
    fontSize: 14,
    color: "#555",
  },

  activeTabText: {
    color: "#0A2F6B",
    fontWeight: "600",
  },

  content: {
    padding: 16,
  },

  sectionTitle: {
    marginTop: 12,
    fontWeight: "600",
    color: "#0A2F6B",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  infoLabel: {
    fontWeight: "500",
    color: "#333",
  },

  infoValue: {
    color: "#666",
  },
});

