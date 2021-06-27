import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProfilePage from "./src/Pages/Profiles";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <ProfilePage />
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
