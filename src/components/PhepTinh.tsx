import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const PhepTinh = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // Hàm định dạng kết quả hiển thị
  const formatResult = (value) => {
    if (value === null || value === "") return "...";
    if (typeof value === "string") return value; // Trả về thông báo lỗi nếu là chuỗi

    if (typeof value === "number") {
      // Giới hạn tối đa 6 chữ số thập phân và loại bỏ số 0 thừa ở cuối
      const rounded = parseFloat(value.toFixed(6));
      // Định dạng hiển thị dấu phẩy/chấm theo chuẩn tiếng Việt (ví dụ: 1.250,5)
      return rounded.toLocaleString("vi-VN");
    }

    return String(value);
  };

  const handleCalculation = (operator) => {
    // Thay thế dấu phẩy thành dấu chấm để chuyển đổi số chính xác
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
        <Text style={styles.title}>MÁY TÍNH CƠ BẢN</Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập số thứ nhất"
          keyboardType="numeric"
          placeholderTextColor="#94a3b8"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập số thứ hai"
          keyboardType="numeric"
          placeholderTextColor="#94a3b8"
          value={num2}
          onChangeText={setNum2}
        />

        {/* Khu vực hiển thị kết quả sử dụng hàm formatResult */}
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Kết quả:</Text>
          <Text style={styles.resultValue}>{formatResult(result)}</Text>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleCalculation("+")}
          >
            <Text style={styles.buttonText}>Cộng (+)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleCalculation("-")}
          >
            <Text style={styles.buttonText}>Trừ (-)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleCalculation("*")}
          >
            <Text style={styles.buttonText}>Nhân (x)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonDivide]}
            onPress={() => handleCalculation("/")}
          >
            <Text style={styles.buttonText}>Chia (/)</Text>
          </TouchableOpacity>
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
    // justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 24,
    letterSpacing: 1,
  },
  input: {
    width: "100%",
    height: 48,
    borderColor: "#cbd5e1",
    borderWidth: 1.5,
    marginVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: 16,
    color: "#334155",
    backgroundColor: "#f8fafc",
  },
  resultContainer: {
    backgroundColor: "#eff6ff",
    borderRadius: 10,
    padding: 12,
    marginVertical: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#3b82f6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resultLabel: {
    fontSize: 16,
    color: "#1e3a8a",
    fontWeight: "600",
  },
  resultValue: {
    fontSize: 18,
    color: "#1d4ed8",
    fontWeight: "bold",
  },
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#3b82f6",
    width: "48%",
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonDivide: {
    backgroundColor: "#0ea5e9",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
});
