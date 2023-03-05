import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

import checkButton from "../../../../assets/check.png"
import checkedButton from "../../../../assets/checked.png"
import trashButton from "../../../../assets/trash.png"
import { useState } from "react"
import { useCheckedTodo } from "../../../../context/CheckedTodoContext"

interface ToDoItemProps {
  text: string
  onRemove: () => void
  todo: string
}

export function ToDoItem({ text, onRemove, todo }: ToDoItemProps) {
  const [checked, setChecked] = useState(false)
  const { handleCheckToDo } = useCheckedTodo()

  function handleToggleCheck() {
    const onPressCheck = !checked
    handleCheckToDo(todo)
    setChecked(onPressCheck)
  }

  return (
    <View style={
      !checked ? 
      styles.container : 
      {...styles.container, borderColor: '#262626'}
    }>
      <TouchableOpacity 
        style={styles.checkButton} 
        onPress={handleToggleCheck}
      >
        {
          !checked ? 
          <Image source={checkButton} /> :
          <Image source={checkedButton} />
        }
      </TouchableOpacity>
      <Text style={
        !checked ? 
        styles.text : 
        {...styles.text, ...styles.textDashed}
      }>
        {text}  
      </Text>
      <TouchableOpacity style={styles.trashButton} onPress={onRemove}>
      <Image source={trashButton} />
      </TouchableOpacity>
    </View>
  )
}