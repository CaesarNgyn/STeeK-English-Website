import './Student.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';


const Student = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class='admin-student'>
      <h3>My Courses</h3>
      {/* ===================TABLE Student MANAGE==================== */}
      <Table striped>
        <thead class="table-info">
          <tr>
            <th scope="col" class="col">#</th>
            <th scope="col" class="table-striped-columns col-lg-3">UserName</th>
            <th scope="col" class="col-lg-4">Registered Courses</th>
            <th scope="col" class="col-lg-3">Progress</th>
            <th scope="col" class="col">Modify</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0</th>
            <td>Khanh Nguyen</td>
            <td>
              <tr>Toeic 250</tr>
              <tr>Toeic 450</tr>

            </td>
            <td>
              <tr>5/5</tr>
              <tr>2/7</tr>
            </td>
            <td>
              <a href="#"
                data-bs-toggle="modal" data-bs-target="#delete-course-modal"
                data-bs-id="" onClick={handleShow}>Delete User</a>
            </td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Tea Nguyen</td>
            <td>
              <tr>Toeic 250</tr>
              <tr>Toeic 450</tr>
              <tr>Toeic 650</tr>

            </td>
            <td>
              <tr>5/5</tr>
              <tr>7/7</tr>
              <tr>0/9</tr>
            </td>
            <td>
              <a href="#"
                data-bs-toggle="modal" data-bs-target="#delete-course-modal"
                data-bs-id="" onClick={handleShow}>Delete User</a>

            </td>

          </tr>

        </tbody>

        {/* ==============Modal Delete User Btn =========== */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure to delete Student ?</Modal.Title>
          </Modal.Header>
          <Modal.Body>This will be address deleting the User !!!</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Delete
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Table>

    </div>
  )
}

export default Student;
