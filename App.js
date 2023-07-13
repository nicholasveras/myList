import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import { COLORS } from "./src/theme/colors";
import Input from "./src/components/Input";
import Button from "./src/components/Button";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <View style={styles.input}>
        <Input />
        <Button />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black900,
  },
  input: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginTop: -27,
    gap: 4,
  },
});
