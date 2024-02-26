import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={{ width: 200, height: 200, backgroundColor: "blue" }} />
      <View style={{ width: 200, height: 200, backgroundColor: "red" }} /> */}
      <Text style={{ fontWeight: "bold", fontSize: 22 }}>Hello Raju</Text>
      <Text style={{ color: "red", textTransform: "uppercase" }}>Second</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
