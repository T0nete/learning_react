import { type TodoId, type ListOfTodos, type TodoToggle } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: TodoToggle) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
    <ul className='todo-list'>
        {todos.map(todo => (
            <li key={todo.id}
                className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key ={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleCompleted={onToggleCompleted}
                    />
            </li>
        ))}
    </ul>
  )
}
