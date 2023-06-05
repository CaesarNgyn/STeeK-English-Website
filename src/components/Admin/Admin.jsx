import './Admin.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

const Admin = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class='admin-courses'>
      <h3>My Courses</h3>
      {/* ===================TABLE Course==================== */}
      <Table striped>
        <thead class="table-info">
          <tr>
            <th scope="col" class="col">#</th>
            <th scope="col" class="table-striped-columns col-lg-2">Name</th>
            <th scope="col" class="col-lg-2">Price</th>
            <th scope="col" class="col-lg-6">Created Time</th>
            <th scope="col" class="col">Modify</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0</th>
            <td>Toeic 250</td>
            <td>Gia : 50$</td>
            <td>yesterday</td>
            <td>
              {/* <a href="" class="edit">Edit</a> */}
              <a href="#"
                data-bs-toggle="modal" data-bs-target="#delete-course-modal"
                data-bs-id="" onClick={handleShow}>Delete</a>
            </td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Toeic 450</td>
            <td>Gia : 100$</td>
            <td>Saturday , June 3rd 2023</td>
            <td>
              {/* <a href="" class="edit">Edit</a> */}
              <a href="#"
                data-bs-toggle="modal" data-bs-target="#delete-course-modal"
                data-bs-id="" onClick={handleShow}>Delete</a>

            </td>

          </tr>

        </tbody>

        {/* ==============Modal delete btn =========== */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure to delete ?</Modal.Title>
          </Modal.Header>
          <Modal.Body>This will be address deleting the course !!!</Modal.Body>
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


export default Admin;
