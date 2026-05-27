import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Định nghĩa component Greeting với props name và age
interface Props {
  name: string;
  age: number;
}

const GreetingComponent = ({ name, age }: Props) => {
  const handlePress = () => {
    Alert.alert('Thông báo', `Xin chào ${name}, ${age} tuổi`);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.helloText}>Hello {name},</Text>
      <Text style={styles.ageText}>{age} tuổi</Text>
      <View style={styles.underline} />

      <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Nhấn vào đây</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 40,
    borderRadius: 35,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.1,
    shadowRadius: 25,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  helloText: {
    fontSize: 32,
    color: '#0f172a',
    fontWeight: '800',
    textAlign: 'center',
  },
  ageText: {
    fontSize: 24,
    color: '#64748b',
    fontWeight: '500',
    marginTop: 5,
  },
  underline: {
    width: 60,
    height: 4,
    backgroundColor: '#0ea5e9',
    marginVertical: 25,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#0ea5e9',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GreetingComponent;
