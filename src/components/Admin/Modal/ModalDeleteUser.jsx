import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteUser } from '../../../services/apiServices';

const ModalDeleteUser = (props) => {
  const { show, setShow, dataDelete } = props
  // console.log("data delete: ", dataDelete)
  const handleClose = () => setShow(false);

  const handleSubmitDeleteUser = async () => {
    let data = await deleteUser(dataDelete)

    console.log('Data:', data)
    if (data && data.data.EC === 0) {
      toast.success(data.data.reply)
      handleClose()

      await props.fetchAllUsers()
    } else {
      toast.error(data.EM)
    }
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
      >

        <Modal.Header >
          <Modal.Title>Xóa Người Dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>Xác nhận xóa người dùng này?
          <br></br>
          <b>Email: {dataDelete}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;