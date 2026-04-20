import useUser from '../../hooks/useUser';
import {Table} from 'react-bootstrap';
const UserTable = () => {
 const {getAllUsers}=useUser();
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
        {data && data.map((user:any) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.city}</td>
            <td>
              <button className='btn btn-sm btn-primary'>Edit</button>
              <button className='btn btn-sm btn-danger'>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)
}

export default UserTable