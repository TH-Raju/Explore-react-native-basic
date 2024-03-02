import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
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
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 300,
    padding: 20,
    paddingTop: 40,
  },
  box1: {
    height: 50,
    width: 50,
    backgroundColor: "yellow",
  },
  box2: {
    height: 50,
    width: 50,
    backgroundColor: "green",
  },
  box3: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});
