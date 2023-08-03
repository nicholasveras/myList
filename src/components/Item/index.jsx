import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../theme/colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

export default function Item({ data, checked, remove }) {
  // checked é a função que vem do componente pai (espera receber um item selecionado)
  const [selected, setSelected] = useState(false);

  function handleSelect(itemSelected) {
    setSelected(!selected);
    checked(itemSelected); // envia o item selecionado para o componente pai
  }

  return (
    <GestureHandlerRootView>
      <Swipeable
        containerStyle={{ paddingHorizontal: 24 }}
        overshootRight={false}
        renderRightActions={() => (
          <RectButton
            style={styles.trash}
            onPress={() => remove(data)}
            activeOpacity={0.6}
          >
            <Feather name="trash" size={20} color="white" />
          </RectButton>
        )}
      >
        <RectButton
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
        </RectButton>
      </Swipeable>
    </GestureHandlerRootView>
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
  trash: {
    height: "96%",
    marginVertical: 1,
    backgroundColor: COLORS.red,
    justifyContent: "center",
    borderRadius: 8,
    paddingLeft: 32,
    paddingRight: 16,
    right: -40,
  },
});
