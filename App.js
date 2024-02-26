import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View style={{ width: 200, height: 200, backgroundColor: "blue" }} />
      <View style={{ width: 200, height: 200, backgroundColor: "red" }} /> */}
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Hello Raju</Text>
        <Text style={{ color: "red", textTransform: "uppercase" }}>Second</Text>
        {/* local image  */}
        <Image
          source={require("./assets/1656036010178.jpg")}
          style={{ height: 200, width: 200 }}
        />
        {/* remote image  */}
        {/* When use URI must be specified height and width */}
        <Image
          source={{
            uri: "https://assets-global.website-files.com/610bb663a35dd3364ddbf08c/6240a218db7ffbb91faf1589_creating-hover-effect-tailwind-css.png",
          }}
          style={{ height: 200, width: 200 }}
        />
        <Text style={{ fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text style={{ fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text style={{ fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text style={{ fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text style={styles.textContainer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Text>
      </ScrollView>
      <NewComponent />
    </View>
  );
}
// Create new component

function NewComponent() {
  return (
    <View>
      <Text>New component</Text>
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
  textContainer: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
