import { StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../theme/colors";

export default function Input() {
  return (
    <TextInput
      style={styles.container}
      placeholder="Adicione algo a sua lista"
      placeholderTextColor={COLORS.gray300}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.gray700, // cor de fundo
    height: 54, // altura
    padding: 16, // espaçamento interno

    borderRadius: 6, // borda arredondada
    borderColor: COLORS.black700, // cor da borda
    borderWidth: 1, // largura da borda

    color: COLORS.white, // cor do texto
    fontSize: 16, // tamanho da fonte
  },
});
