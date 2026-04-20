import React from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import useUser from "../../hooks/useUser";

const UserForm = ({ show, onHide }) => {
     const { register, handleSubmit, reset } = useForm();
const {addUser}=useUser();
     const onSubmit = (data) => {
          addUser.mutate(data);
          reset();
          onHide?.();
     };

     return (
          <Modal show={show} onHide={onHide} centered>
               <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
               </Modal.Header>
               <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                         <Form.Group className="mb-3" controlId="name">
                              <Row className="align-items-center">
                                   <Col sm={4}>
                                        <Form.Label className="mb-sm-0">Name</Form.Label>
                                   </Col>
                                   <Col sm={8}>
                                        <Form.Control
                                             type="text"
                                             placeholder="Enter name"
                                             {...register("name")}
                                        />
                                   </Col>
                              </Row>
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="email">
                              <Row className="align-items-center">
                                   <Col sm={4}>
                                        <Form.Label className="mb-sm-0">Email</Form.Label>
                                   </Col>
                                   <Col sm={8}>
                                        <Form.Control
                                             type="email"
                                             placeholder="Enter email"
                                             {...register("email")}
                                        />
                                   </Col>
                              </Row>
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="age">
                              <Row className="align-items-center">
                                   <Col sm={4}>
                                        <Form.Label className="mb-sm-0">Age</Form.Label>
                                   </Col>
                                   <Col sm={8}>
                                        <Form.Control
                                             type="number"
                                             placeholder="Enter age"
                                             {...register("age")}
                                        />
                                   </Col>
                              </Row>
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="gender">
                              <Row className="align-items-center">
                                   <Col sm={4}>
                                        <Form.Label className="mb-sm-0">Gender</Form.Label>
                                   </Col>
                                   <Col sm={8}>
                                        <Form.Select {...register("gender")}>
                                             <option value="">Select gender</option>
                                             <option value="male">Male</option>
                                             <option value="female">Female</option>
                                        </Form.Select>
                                   </Col>
                              </Row>
                         </Form.Group>

                         <Form.Group controlId="city">
                              <Row className="align-items-center">
                                   <Col sm={4}>
                                        <Form.Label className="mb-sm-0">City</Form.Label>
                                   </Col>
                                   <Col sm={8}>
                                        <Form.Control
                                             type="text"
                                             placeholder="Enter city"
                                             {...register("city")}
                                        />
                                   </Col>
                              </Row>
                         </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                         <Button variant="secondary" onClick={onHide}>
                              Cancel
                         </Button>
                         <Button type="submit" variant="primary">
                              Submit
                         </Button>
                    </Modal.Footer>
               </Form>
          </Modal>
     );
};

export default UserForm;
