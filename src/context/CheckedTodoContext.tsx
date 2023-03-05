import { createContext, ReactNode, useState, useContext, Dispatch } from 'react' 

interface CheckedTodoProvider {
  children: ReactNode
}

interface CheckedTodoContextData {
  toDoCheckedList: string[]
  setToDoCheckedList: Dispatch<React.SetStateAction<string[]>>
  handleCheckToDo: (todo: string) => void
}

const CheckedTodoContext = createContext({} as CheckedTodoContextData)

export function CheckedTodoProvider({ children }: CheckedTodoProvider) {
  const [toDoCheckedList, setToDoCheckedList] = useState<string[]>([])

  function handleCheckToDo(todo: string) {

    if (toDoCheckedList.includes(todo)) {
      setToDoCheckedList(prevState => prevState.filter(item => item !== todo))
      return
    }

    setToDoCheckedList(prevState => [...prevState, todo])
  }

  return (
    <CheckedTodoContext.Provider 
      value={{toDoCheckedList, setToDoCheckedList, handleCheckToDo}}
    >
      {children}
    </CheckedTodoContext.Provider>
  )
}

export function useCheckedTodo(): CheckedTodoContextData {
  const context = useContext(CheckedTodoContext)

  return context
}