import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface ChildProps {
  parentName: string;
  parentAge: string;
  onDataFromChild: (name: string, age: string) => void;
}

const ChildComponent: React.FC<ChildProps> = ({
  parentName,
  parentAge,
  onDataFromChild,
}) => {
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");

  const handleSendToParent = () => {
    onDataFromChild(childName, childAge);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Component Con (Child)</Text>

      {/* Khu vực nhận dữ liệu từ Cha */}
      <View style={styles.receivedContainer}>
        <Text style={styles.receivedTitle}>Dữ liệu nhận từ Cha (Props):</Text>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Tên Cha:</Text>
          <Text style={styles.dataValue}>{parentName || "(Chưa nhập)"}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Tuổi Cha:</Text>
          <Text style={styles.dataValue}>
            {parentAge ? `${parentAge} tuổi` : "(Chưa nhập)"}
          </Text>
        </View>
      </View>

      {/* Form nhập liệu của Con */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Nhập dữ liệu gửi lên Cha:</Text>
        
        <TextInput
          style={styles.textInput}
          placeholder="Nhập tên của Con"
          placeholderTextColor="#a0aec0"
          value={childName}
          onChangeText={(text) => {
            setChildName(text);
            console.log("Child name input: " + text);
          }}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Nhập tuổi của Con"
          placeholderTextColor="#a0aec0"
          keyboardType="numeric"
          value={childAge}
          onChangeText={(text) => {
            setChildAge(text);
            console.log("Child age input: " + text);
          }}
        />

        <TouchableOpacity style={styles.button} onPress={handleSendToParent}>
          <Text style={styles.buttonText}>Gửi dữ liệu lên Cha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChildComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    borderWidth: 2,
    borderColor: "#10b981", // Màu xanh lá để phân biệt Con
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#10b981",
    marginBottom: 15,
    textAlign: "center",
  },
  receivedContainer: {
    backgroundColor: "#f0fdf4",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#a7f3d0",
    marginBottom: 15,
  },
  receivedTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#065f46",
    marginBottom: 6,
  },
  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  dataLabel: {
    fontSize: 15,
    color: "#374151",
    fontWeight: "500",
  },
  dataValue: {
    fontSize: 15,
    color: "#047857",
    fontWeight: "bold",
  },
  formContainer: {
    width: "100%",
  },
  formTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: "#10b981",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    color: "#065f46",
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "#10b981",
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
