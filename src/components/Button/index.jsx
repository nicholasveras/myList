import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../theme/colors";
import { Feather } from "@expo/vector-icons";

export default function Button() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <Feather name="plus-circle" size={18} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.blueDark,
    width: 54,
    height: 54,

    borderRadius: 6,
    borderColor: COLORS.black700,
    borderWidth: 1,
  },
});
