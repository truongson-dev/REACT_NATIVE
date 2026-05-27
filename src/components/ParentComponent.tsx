import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import ChildComponent from "./ChildComponent";

const Parent = () => {
  const [parentName, setParentName] = useState("");
  const [parentAge, setParentAge] = useState("");

  // State lưu dữ liệu nhận được từ Component Con
  const [childData, setChildData] = useState({ name: "", age: "" });

  // Callback nhận dữ liệu từ con gửi lên
  const handleDataFromChild = (name: string, age: string) => {
    setChildData({ name, age });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.mainTitle}>Truyền Dữ Liệu Cha & Con</Text>

      {/* Component Cha Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Component Cha (Parent)</Text>

        {/* Khu vực nhận dữ liệu từ Con */}
        <View style={styles.receivedContainer}>
          <Text style={styles.receivedTitle}>
            Dữ liệu nhận từ Con (Callback):
          </Text>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Tên Con:</Text>
            <Text style={styles.dataValue}>
              {childData.name || "(Chưa nhận)"}
            </Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Tuổi Con:</Text>
            <Text style={styles.dataValue}>
              {childData.age ? `${childData.age} tuổi` : "(Chưa nhận)"}
            </Text>
          </View>
        </View>

        {/* Nhập dữ liệu của Cha */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Nhập dữ liệu gửi xuống Con:</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Nhập tên của Cha"
            placeholderTextColor="#a0aec0"
            value={parentName}
            onChangeText={(text) => {
              setParentName(text);
              console.log("Parent name input: " + text);
            }}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Nhập tuổi của Cha"
            placeholderTextColor="#a0aec0"
            keyboardType="numeric"
            value={parentAge}
            onChangeText={(text) => {
              setParentAge(text);
              console.log("Parent age input: " + text);
            }}
          />
        </View>
      </View>

      {/* Component Con (Render bên trong Cha) */}
      <ChildComponent
        parentName={parentName}
        parentAge={parentAge}
        onDataFromChild={handleDataFromChild}
      />
    </ScrollView>
  );
};

export default Parent;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    alignItems: "center",
    width: "100%",
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3873e1",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    borderWidth: 2,
    borderColor: "#3873e1", // Màu xanh dương để phân biệt Cha
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
    color: "#3873e1",
    marginBottom: 15,
    textAlign: "center",
  },
  receivedContainer: {
    backgroundColor: "#f0f7ff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#bfdbfe",
    marginBottom: 15,
  },
  receivedTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e40af",
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
    color: "#1d4ed8",
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
    borderColor: "#3873e1",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    color: "#1d4ed8",
    backgroundColor: "#fafafa",
  },
});
