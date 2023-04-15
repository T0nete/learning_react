import { type TodoToggle, type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({ id, completed }: TodoToggle) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {
  const handleOnChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleted({
      id,
      completed: event.target.checked
    })
  }

  return (
        <div className='view'>
            <input
                className='toggle'
                type='checkbox'
                checked={completed}
                onChange={(event) => { handleOnChangeCheckBox(event) } }
            />
            <label>{title}</label>
            <button
                className='destroy'
                onClick={() => {
                  onRemoveTodo({ id })
                }}
            />
        </div>

  )
}
