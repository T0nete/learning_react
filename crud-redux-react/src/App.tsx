import { Table } from './componentes/Table'

function App () {
  return (
    <>
      <div className='flex items-center justify-center p-4'>
        <div className='w-full sm:w-4/5 md:w-3/4 lg:w-2/3 '>
          <div className='border border-gray-300 rounded-md shadow overflow-x-auto p-4'>
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
