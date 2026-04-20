import React, { useState } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
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
            onClick={() => setShowForm(true)}
          >
            Add User
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <UserForm show={showForm} onHide={() => setShowForm(false)} />
          <UserTable />
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
