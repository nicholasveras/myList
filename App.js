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
import Header from "./src/components/Header";
import { COLORS } from "./src/theme/colors";
import Input from "./src/components/Input";
import Button from "./src/components/Button";
import EmptyIcon from "./src/assets/clipboard.png";
import Item from "./src/components/Item";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <View style={styles.input}>
        <Input defaultValue={task} onChangeText={(text) => setTask(text)} />
        <Button onPress={handleAddTask} />
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Item data={item} />}
        contentContainerStyle={{
          flexDirection: "column-reverse", // inverte a ordem da lista
          paddingTop: 16,
          paddingHorizontal: 24,
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
});
