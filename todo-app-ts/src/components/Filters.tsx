import { type FilterValue } from '../types'
import { FILTER_BUTTONS } from '../consts'

interface Props {
  filtersSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({
  filtersSelected,
  onFilterChange
}) => {
  const handleOnClick = (filter: FilterValue): void => {
    onFilterChange(filter)
  }
  return (
    <ul className='filters'>
        {
            Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
              const isSelected = filtersSelected === key
              const className = isSelected ? 'selected' : ''
              return (
                <li key={key}>
                    <a
                        href={href}
                        className={className}
                        onClick={(event) => {
                          event.preventDefault()
                          handleOnClick(key)
                        }}
                    >{literal}</a>

                </li>
              )
            })
        }
    </ul>
  )
}
