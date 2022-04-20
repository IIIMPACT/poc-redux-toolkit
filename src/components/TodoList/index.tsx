import { useSelector } from 'react-redux'
import { mockData } from 'src/lib'
import { useListTodosQuery } from 'src/services/todo'
import TodoItem from '../TodoItem'
import * as Styled from './styles'

const TodoList: React.FC = () => {
  const { data, error, isLoading } = useListTodosQuery('')

  // const todos = useSelector((state) => {
  //   // @ts-ignore
  //   return state.tasks
  // })

  return (
    <Styled.TodoList>
      {data && data.map((item) => <TodoItem key={item.id} {...item} />)}
    </Styled.TodoList>
  )
}

export default TodoList
