import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import { COLORS } from "./src/theme/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Header />

      <Text>My List!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black900,
  },
});
