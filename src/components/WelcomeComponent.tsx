import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface WelcomeProps {
  name: string;
}

const WelcomeComponent: React.FC<WelcomeProps> = ({ name }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.greetingText}>Chào bạn</Text>
      <Text style={styles.nameText}>{name}</Text>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 45,
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
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 22,
    color: '#64748b',
    fontWeight: '500',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  nameText: {
    fontSize: 34,
    color: '#0f172a',
    fontWeight: '800',
    textAlign: 'center',
  },
  underline: {
    width: 80,
    height: 6,
    backgroundColor: '#0ea5e9',
    marginTop: 25,
    borderRadius: 10,
  },
});

export default WelcomeComponent;
