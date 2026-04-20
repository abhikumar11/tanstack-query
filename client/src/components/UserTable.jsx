import useUser from '../../hooks/useUser';
import {Table} from 'react-bootstrap';
const UserTable = ({ onEdit, searchTerm }) => {
 const {getAllUsers, deleteUser}=useUser(searchTerm);
   const {data,isLoading,error}=getAllUsers;
  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && <tr><td colSpan={6}>Loading...</td></tr>}
        {error && <tr><td colSpan={6}>Error: {error.message}</td></tr>}
        {!isLoading && !error && data?.length === 0 && (
          <tr>
            <td colSpan={6}>No users found.</td>
          </tr>
        )}
        {data && data.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.city}</td>
            <td>
              <button className='btn btn-sm btn-primary' onClick={() => onEdit(user)}>Edit</button>
              <button onClick={() => deleteUser.mutate(user._id)} className='btn btn-sm btn-danger'>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)
}

export default UserTable
