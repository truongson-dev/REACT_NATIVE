import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface LightControlProps {
  isOn: boolean;
  brightness: number;
  onToggle: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function LightControl({
  isOn,
  brightness,
  onToggle,
  onIncrease,
  onDecrease,
}: LightControlProps) {
  const isDisabled = !isOn;

  return (
    <View style={styles.childBox}>
      <Text style={styles.sectionTitle}>===== COMPONENT CON =====</Text>

      {/* Hình ảnh bóng đèn minh họa */}
      <View style={styles.bulbContainer}>
        <Text style={styles.bulbEmoji}>{isOn ? "💡" : "🔦"}</Text>
        <View
          style={[
            styles.glowCircle,
            {
              backgroundColor: isOn
                ? `rgba(250, 204, 21, ${brightness / 100})`
                : "transparent",
              width: 80 + brightness * 0.6,
              height: 80 + brightness * 0.6,
            },
          ]}
        />
      </View>

      {/* Hiển thị dữ liệu nhận từ cha */}
      <View style={styles.infoRow}>
        <Text style={styles.label}>Trạng thái nhận được:</Text>
        <Text
          style={[styles.statusText, { color: isOn ? "#16a34a" : "#dc2626" }]}
        >
          {isOn ? "🟢 BẬT" : "🔴 TẮT"}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Độ sáng nhận được:</Text>
        <Text style={styles.brightnessText}>{brightness}%</Text>
      </View>

      {/* Thanh độ sáng trực quan */}
      <View style={styles.brightnessBarWrapper}>
        <View style={styles.brightnessBarBg}>
          <View
            style={[
              styles.brightnessBarFill,
              {
                width: `${brightness}%`,
                backgroundColor: isOn ? "#facc15" : "#9ca3af",
              },
            ]}
          />
        </View>
        <Text style={styles.barLabel}>{brightness}%</Text>
      </View>

      {/* Nút Bật / Tắt */}
      <TouchableOpacity
        style={[
          styles.toggleBtn,
          { backgroundColor: isOn ? "#dc2626" : "#16a34a" },
        ]}
        onPress={onToggle}
        activeOpacity={0.8}
      >
        <Text style={styles.toggleBtnText}>
          {isOn ? "⏹ TẮT ĐÈN" : "▶ BẬT ĐÈN"}
        </Text>
      </TouchableOpacity>

      {/* Nút Tăng / Giảm độ sáng */}
      <View style={styles.brightnessControls}>
        <TouchableOpacity
          style={[styles.ctrlBtn, isDisabled && styles.ctrlBtnDisabled]}
          onPress={onDecrease}
          disabled={isDisabled}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.ctrlBtnText,
              isDisabled && styles.ctrlBtnTextDisabled,
            ]}
          >
            − Giảm sáng
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.ctrlBtn, isDisabled && styles.ctrlBtnDisabled]}
          onPress={onIncrease}
          disabled={isDisabled}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.ctrlBtnText,
              isDisabled && styles.ctrlBtnTextDisabled,
            ]}
          >
            + Tăng sáng
          </Text>
        </TouchableOpacity>
      </View>

      {isDisabled && (
        <Text style={styles.warningText}>⚠ Bật đèn để điều chỉnh độ sáng</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  childBox: {
    marginTop: 16,
    backgroundColor: "#fafafa",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#f59e0b",
    padding: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#b45309",
    textAlign: "center",
    marginBottom: 14,
    letterSpacing: 1,
  },
  bulbContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    height: 120,
  },
  bulbEmoji: {
    fontSize: 64,
    zIndex: 2,
  },
  glowCircle: {
    position: "absolute",
    borderRadius: 999,
    zIndex: 1,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "500",
  },
  statusText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  brightnessText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1d4ed8",
  },
  brightnessBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  brightnessBarBg: {
    flex: 1,
    height: 14,
    backgroundColor: "#e5e7eb",
    borderRadius: 999,
    overflow: "hidden",
  },
  brightnessBarFill: {
    height: "100%",
    borderRadius: 999,
  },
  barLabel: {
    fontSize: 13,
    color: "#6b7280",
    minWidth: 36,
    textAlign: "right",
  },
  toggleBtn: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  toggleBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  brightnessControls: {
    flexDirection: "row",
    gap: 12,
  },
  ctrlBtn: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#3b82f6",
  },
  ctrlBtnDisabled: {
    backgroundColor: "#d1d5db",
  },
  ctrlBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  ctrlBtnTextDisabled: {
    color: "#9ca3af",
  },
  warningText: {
    marginTop: 10,
    textAlign: "center",
    color: "#b45309",
    fontSize: 13,
    fontStyle: "italic",
  },
});
