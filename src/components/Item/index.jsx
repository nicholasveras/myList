import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../theme/colors";
import { Ionicons } from "@expo/vector-icons";

export default function Item({ data }) {
  return (
    <View style={styles.container}>
      <Ionicons name={"radio-button-off"} size={24} color={COLORS.ciano} />
      <Text style={styles.text}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: COLORS.black500,
    borderWidth: 1,
    borderColor: COLORS.gray500,
    borderRadius: 8,
    padding: 12,
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
  },
});
