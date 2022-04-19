import { useSelector } from 'react-redux'
import { mockData } from 'src/lib'
import TodoItem from '../TodoItem'
import * as Styled from './styles'

const TodoList: React.FC = () => {
  const todos = useSelector((state) => {
    // @ts-ignore
    return state.tasks
  })

  return (
    <Styled.TodoList>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </Styled.TodoList>
  )
}

export default TodoList
