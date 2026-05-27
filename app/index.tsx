import ParentControl from "@/src/components/ParentControl";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ParentControl />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
});

export default Index;
