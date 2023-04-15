import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filtersSelected: FilterValue
  handleOnFilterChange: (filter: FilterValue) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filtersSelected,
  handleOnFilterChange,
  onClearCompleted
}) => {
  return (
    <footer className="footer">
        <span className="todo-count">
            <strong>{completedCount}</strong> tareas pendientes
        </span>
        <Filters
            filtersSelected={filtersSelected}
            onFilterChange={handleOnFilterChange }
        />
        {
            completedCount > 0 &&
            <button
                className='clear-completed'
                onClick={onClearCompleted}>
                Borrar completadas
            </button>
        }
    </footer>
  )
}
