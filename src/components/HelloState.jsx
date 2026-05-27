import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const HelloState = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const sayHello = () => {
    Alert.alert(`Hello ${name || "bạn"}, ${age || "0"} tuổi!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello State</Text>

      <View style={styles.containerInput}>
        {/* Nhập tên */}
        <TextInput
          style={styles.textInput}
          placeholder="nhập tên của bạn"
          value={name}
          onChangeText={(text) => {
            setName(text);
            console.log("name: " + name); // log ra giá trị tên khi người dùng nhập vào
          }}
        />
        {/* Nhập tuổi */}
        <TextInput
          style={styles.textInput}
          placeholder="nhập tuổi của bạn"
          value={age.toString()} // chuyển đổi số thành chuỗi để hiển thị trong TextInput
          onChangeText={(text) => {
            setAge(text);
            console.log("age: " + age); // log ra giá trị tuổi khi người dùng nhập vào
          }}
        />
        {/* Buttone */}
        <TouchableOpacity onPress={sayHello}>
          <Text style={styles.buttonText}>in kết quả</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HelloState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: "red",
    marginBottom: 20,
  },
  containerInput: {
    width: "100%",
    paddingHorizontal: 10,
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: "#3873e1", // màu hồng giống trong ảnh
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginBottom: 10,
    color: "#1188f7", // màu chữ xanh nhạt như trong ảnh
  },
  buttonText: {
    fontSize: 16,
    color: "black",
    marginTop: 5,
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "#3873e1",
    borderRadius: 8,
  },
});
