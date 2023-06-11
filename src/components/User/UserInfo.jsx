import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

const UserInfo = (props) => {
  const { show, setShow, dataUpdate } = props

  return (
    <>
      <Modal show={show}
        size="xl"
        backdrop="static"
        className='modal-add-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-4">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email"
                className="form-control"
                disabled={true}

                onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input type="password"
                className="form-control"

                disabled={true}
                onChange={(event) => setPassword(event.target.value)} />
            </div>


            <div className="col-md-6">
              <label className="form-label">User Name</label>
              <input type="text"
                className="form-control"

                onChange={(event) => setUsername(event.target.value)} />
            </div>



          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default UserInfo