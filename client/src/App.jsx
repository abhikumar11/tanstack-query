import React, { useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import UserForm from './components/UserForm.jsx';
import UserTable from './components/UserTable.jsx';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
    setSelectedUser(null);
  };

  return (
    <div className='container mt-5'> 
      <Row className="align-items-end mb-4">
        <Col md={6}>
          <Form onSubmit={handleSearch} className="d-flex gap-2">
            <Form.Control 
              type="text" 
              placeholder='Search Users...' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type='submit' variant='outline-primary'>Search</Button>
          </Form>
        </Col>
        <Col md={6} className="text-md-end">
          <Button 
            variant="primary" 
            onClick={handleAddUser}
          >
            Add User
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <UserForm
            show={showForm}
            onHide={handleHideForm}
            selectedUser={selectedUser}
          />
          <UserTable onEdit={handleEditUser} />
        </Col>
      </Row>  
      <Row className="mt-4">
        <Col>
        Pagination
        </Col>
        </Row> 
    </div>
  );
};

export default App;
