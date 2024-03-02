import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        height: 200,
        width: 300,
        backgroundColor: "red",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: 20,
          textAlign: "center",
          backgroundColor: "blue",
        }}
      >
        Hello
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
