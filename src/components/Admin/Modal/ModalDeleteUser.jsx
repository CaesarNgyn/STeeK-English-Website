import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
  const { show, setShow, dataDelete } = props
  console.log("data delete: ", dataDelete)
  const handleClose = () => setShow(false);

  // const handleSubmitDeleteUser = async () => {
  //   let data = await deleteUser(dataDelete.id)
  //   console.log('Done!', data)
  //   if (data && data.EC === 0) {
  //     toast.success(data.EM)
  //     handleClose()

  //     // await fetch()
  //   } else {
  //     toast.error(data.EM)
  //   }
  // }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this User?
          <br></br>
          <b>Email: {dataDelete}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;