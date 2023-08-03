import "react-native-gesture-handler";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import EmptyIcon from "./src/assets/clipboard.png";
import Button from "./src/components/Button";
import Header from "./src/components/Header";
import Input from "./src/components/Input";
import Item from "./src/components/Item";
import { COLORS } from "./src/theme/colors";

export default function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [listConcluded, setListConcluded] = useState([]);

  console.log("Lista: ", list);

  const renderEmptyList = () => (
    <View style={styles.empty}>
      <Image source={EmptyIcon} />
      <Text style={styles.title}>Sua lista ainda está vazia</Text>
      <Text style={{ color: COLORS.gray500 }}>
        Adicione algo para se organizar
      </Text>
    </View>
  );

  function handleAddTask() {
    if (task.trim() === "") return; // trim() remove espaços em branco do inicio e do fim da string

    if (list.includes(task)) {
      return Alert.alert("Tarefa existente", "Digite outra tarefa");
    }

    setList((prevState) => [...prevState, task]); // pega o estado atual da lista e adiciona o novo item
    // limpando input
    setTask("");
  }

  function handleSelectTask(itemSelected) {
    //espera receber o item selecionado
    console.log("selecionou", itemSelected); // mostra no console o item selecionado

    if (listConcluded.includes(itemSelected)) {
      setListConcluded((currentState) =>
        currentState.filter((items) => items !== itemSelected)
      ); // remove o item selecionado da lista de concluídos
      return; // parar a execução da função
    }

    setListConcluded((currentState) => [...currentState, itemSelected]); // adiciona o item selecionado na lista de concluidos
  }

  function HandleRemoveTask(itemToRemove) {
    console.log("remover", itemToRemove);

    Alert.alert(
      "Remover tarefa",
      `Deseja remover essa tarefa?\n"${itemToRemove}"`, // \n quebra de linha
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          onPress: () => {
            setList((currentState) =>
              currentState.filter((tasks) => tasks !== itemToRemove)
            );

            // remover também da lista de concluídos
            setListConcluded((currentState) =>
              currentState.filter((tasks) => tasks !== itemToRemove)
            );
          },
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <View style={styles.input}>
        <Input defaultValue={task} onChangeText={(text) => setTask(text)} />
        <Button onPress={handleAddTask} />
      </View>

      <View style={styles.info}>
        <View style={styles.typeView}>
          <Text style={styles.type}>Criadas</Text>

          <View style={styles.qtdView}>
            <Text style={styles.qtdNumber}>{list.length}</Text>
          </View>
        </View>

        <View style={styles.typeView}>
          <Text style={[styles.type, { color: COLORS.blue500 }]}>
            Concluídas
          </Text>

          <View style={styles.qtdView}>
            {/* mostra a quantidade de itens concluidos  */}
            <Text style={styles.qtdNumber}>{listConcluded.length}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Item
            data={item}
            checked={handleSelectTask} // checked é a função, enviada para o componente
            remove={HandleRemoveTask}
          />
        )}
        contentContainerStyle={{
          flexDirection: "column-reverse", // inverte a ordem da lista
          paddingTop: 8,
          //paddingHorizontal: 24,
          paddingBottom: 48,
          gap: 8,
        }}
        ListEmptyComponent={() => renderEmptyList()}
      />
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
  empty: {
    alignItems: "center",
    marginTop: 72,
  },
  title: {
    color: COLORS.gray300,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
    marginHorizontal: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray500,
  },
  typeView: {
    flexDirection: "row",
    alignItems: "center",
  },
  type: {
    fontSize: 16,
    color: COLORS.ciano,
    fontWeight: "bold",
  },
  qtdView: {
    backgroundColor: COLORS.gray500,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 99,
    marginLeft: 8,
  },
  qtdNumber: {
    fontSize: 13,
    color: COLORS.white,
    fontWeight: "bold",
  },
});
