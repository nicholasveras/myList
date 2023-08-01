import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Item({ data, checked }) {
  // checked é a função que vem do componente pai (espera receber um item selecionado)
  const [selected, setSelected] = useState(false);

  function handleSelect(itemSelected) {
    setSelected(!selected);
    checked(itemSelected); // envia o item selecionado para o componente pai
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleSelect(data)} // envia o item selecionado para a função handleSelect
      activeOpacity={0.3}
    >
      <Ionicons
        name={selected ? "checkmark-circle" : "radio-button-off"}
        size={24}
        color={selected ? COLORS.blue500 : COLORS.ciano}
      />
      <Text style={[styles.text, selected && styles.marked]}>{data}</Text>
    </TouchableOpacity>
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
  marked: {
    color: COLORS.gray300,
    textDecorationLine: "line-through",
  },
});
