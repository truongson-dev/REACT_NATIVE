import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LightControl from "./Lightcontrol";

export default function ParentControl() {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [brightness, setBrightness] = useState<number>(50);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  const handleIncrease = () => {
    if (!isOn) return;
    setBrightness((prev) => Math.min(prev + 10, 100));
  };

  const handleDecrease = () => {
    if (!isOn) return;
    setBrightness((prev) => Math.max(prev - 10, 0));
  };

  return (
    <View style={styles.wrapper}>
      {/* ===== COMPONENT CHA ===== */}
      <View style={styles.parentBox}>
        <Text style={styles.sectionTitle}>===== COMPONENT CHA =====</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Trạng thái đèn:</Text>
          <Text
            style={[
              styles.statusValue,
              { color: isOn ? "#16a34a" : "#dc2626" },
            ]}
          >
            {isOn ? "BẬT" : "TẮT"}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Độ sáng hiện tại:</Text>
          <Text style={styles.brightnessValue}>{brightness}%</Text>
        </View>

        {/* Truyền dữ liệu và callback xuống component con */}
        <LightControl
          isOn={isOn}
          brightness={brightness}
          onToggle={handleToggle}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
  },
  parentBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#3b82f6",
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e40af",
    textAlign: "center",
    marginBottom: 16,
    letterSpacing: 1,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eff6ff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  label: {
    fontSize: 15,
    color: "#374151",
    fontWeight: "500",
  },
  statusValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  brightnessValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1d4ed8",
  },
});
