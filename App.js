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
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    flexDirection: "column", // row column
    // justifyContent: "space-between", // justify content works for the main axis
    alignItems: "flex-end", // center row and column  flex-end flex-start
  },
  box: {
    backgroundColor: "red",
  },
  box1: {
    height: 50,
    width: 50,
    backgroundColor: "yellow",
    alignSelf: "flex-start",
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
    alignSelf: "center",
  },
});
