import React from 'react'
import UserForm from './components/UserForm'
import useUser from '../hooks/useUser';

const App = () => {
   const {getAllUsers}=useUser();
   const {data,isLoading,error}=getAllUsers;
  return (
    <div>
        <h1 className='text-center mt-5'>User Management</h1>
          {isLoading && <p>Loading users...</p>}
          {error && <p className='text-danger'>Error: {error.readableMessage}</p>}
          {data && (
            <div className='container mt-4'>
              <h2>All Users</h2>
              <ul className='list-group'>
                {data.map((user) => (
                  <li key={user.id} className='list-group-item'>
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            </div>
          )}
      {/* <UserForm/> */}
    </div>
  )
}

export default App