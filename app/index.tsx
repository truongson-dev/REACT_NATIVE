import React from 'react';
import { StyleSheet, View } from 'react-native';
import GreetingComponent from '../src/components/GreetingComponent';
import WelcomeComponent from '../src/components/WelcomeComponent';

const Index = () => {
  return (
    <View style={styles.content}>
      {/* Component bài 1 */}
      <WelcomeComponent name="Trương Thanh Sơn" />

      {/* Component bài 2 */}
      <GreetingComponent name="Trương Thanh Sơn" age={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Index;




