import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { RadioButton } from "react-native-paper";

const PhepTinh = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // state lưu phép tính được chọn
  const [operator, setOperator] = useState("+");

  const formatResult = (value) => {
    if (value === null || value === "") return "...";
    if (typeof value === "string") return value;

    if (typeof value === "number") {
      const rounded = parseFloat(value.toFixed(6));
      return rounded.toLocaleString("vi-VN");
    }

    return String(value);
  };

  const handleCalculation = () => {
    const val1 = num1.replace(",", ".");
    const val2 = num2.replace(",", ".");

    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Vui lòng nhập số hợp lệ");
      return;
    }

    let res = 0;

    switch (operator) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        if (n2 === 0) {
          setResult("Không thể chia cho 0");
          return;
        }
        res = n1 / n2;
        break;
      default:
        return;
    }

    setResult(res);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tính toán hai số a và b</Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập số a"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />

        <TextInput
          style={styles.input}
          placeholder="Nhập số b"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />

        <Text style={styles.label}>Chọn phép tính:</Text>

        <RadioButton.Group
          onValueChange={(value) => setOperator(value)}
          value={operator}
        >
          <View style={styles.radioItem}>
            <RadioButton value="+" />
            <Text>Cộng (+)</Text>
          </View>

          <View style={styles.radioItem}>
            <RadioButton value="-" />
            <Text>Trừ (-)</Text>
          </View>

          <View style={styles.radioItem}>
            <RadioButton value="*" />
            <Text>Nhân (x)</Text>
          </View>

          <View style={styles.radioItem}>
            <RadioButton value="/" />
            <Text>Chia (/)</Text>
          </View>
        </RadioButton.Group>

        <TouchableOpacity style={styles.button} onPress={handleCalculation}>
          <Text style={styles.buttonText}>Tính Kết Quả</Text>
        </TouchableOpacity>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Kết quả:</Text>
          <Text style={styles.resultValue}>{formatResult(result)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhepTinh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    elevation: 5,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 12,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 8,
  },

  radioItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  button: {
    backgroundColor: "#2196f3",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  resultContainer: {
    marginTop: 20,
    backgroundColor: "#e3f2fd",
    padding: 16,
    borderRadius: 10,
  },

  resultLabel: {
    fontSize: 16,
    fontWeight: "600",
  },

  resultValue: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565c0",
  },
});
