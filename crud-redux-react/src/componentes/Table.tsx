import { users } from './ListOfUsers'

export const Table = () => {
  return (
    <table className='table-fixed'>
        <thead>
            <tr className=''>
                <th className="w-1/4 px-2 py-4 font-bold text-gray-600 text-left">Id</th>
                <th className="w-1/4 px-2 py-4 font-bold text-gray-600 text-left">Name</th>
                <th className="w-1/4 px-2 py-4 font-bold text-gray-600 text-left">Email</th>
                <th className="w-1/4 px-2 py-4 font-bold text-gray-600 text-left">Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) => {
                  return (
                    <tr key={user.id} className='border-b border-gray-400'>
                        <td className='px-2 py-4 font-medium text-gray-500 text-left'>{user.id}</td>
                        <td className='px-2 py-4 font-medium text-gray-500 text-left'>
                            <div className='flex items-center'>
                                <img className='h-8 w-8 rounded-full mr-2' src={`https://unavatar.io/github/${user.github}`}></img>
                                {user.name}
                            </div>
                        </td>
                        <td className='px-2 py-4 font-medium text-gray-500 text-left'>{user.email}</td>
                        <td className='px-2 py-4 font-medium text-gray-500 text-left'>Actions</td>
                    </tr>
                  )
                })
            }
            <tr>

            </tr>
        </tbody>
    </table>
  )
}
