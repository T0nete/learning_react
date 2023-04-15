import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: (title: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <div>
        <header className="header">
            <h1>ToDo</h1>
        </header>
        <CreateTodo saveTodo={onAddTodo} />
    </div>
  )
}
