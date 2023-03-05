import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useState } from "react"

import { Header } from "./components/Header"
import plusImage from "../../assets/plus.png"
import { styles } from "./styles"
import { Amount } from "./components/Amount"
import { ToDoItem } from "./components/ToDoItem"

import clipboard from '../../assets/clipboard.png'
import { useCheckedTodo } from "../../context/CheckedTodoContext"

export function Home() {
  const [toDoList, setToDoList] = useState<string[]>([])
  const [toDo, setToDo] = useState('')

  const { toDoCheckedList, setToDoCheckedList } = useCheckedTodo()

  function handleAddTodo() {
    if (toDoList.includes(toDo)) {
      return Alert.alert('Já existe esse exato item na lista.')
    }

    if (toDo === "") {
      return Alert.alert('Não é possível adicionar um item sem descrição.')
    }

    setToDoList(prevState => [...prevState, toDo])
    setToDo('')
  }

  function handleRemoveTodo(todo: string) {
    Alert.alert(
      'Remover item', 
      'Tem certeza que deseja remover este item da lista?', 
      [
        {
          text: 'Sim',
          onPress: () => {
            setToDoList(prevState => prevState.filter(item => item !== todo))
            setToDoCheckedList(prevState => prevState.filter(item => item !== todo))
          }
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
  }

  return (
    <>
    <Header />
    <View style={styles.container}>
      <View style={styles.insertToDo}>
        <TextInput 
          style={styles.input} 
          placeholder="Adicione uma nova tarefa" 
          placeholderTextColor='#808080'
          onChangeText={setToDo}
          value={toDo}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Image source={plusImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerList}>
        <Amount title="Criadas" quantity={toDoList.length} />
        <Amount title="Concluídas" quantity={toDoCheckedList.length} />
      </View>

      <FlatList
        data={toDoList}
        keyExtractor={item => item}
        style={styles.toDoList} 
        renderItem={({ item }) => (
          <ToDoItem
            key={item}
            text={item}
            onRemove={() => handleRemoveTodo(item)}
            todo={item}
          />
        )} 
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Image source={clipboard} style={styles.clipboardImage} />
            <Text style={styles.strongText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.normalText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
    </>
  )
}