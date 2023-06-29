import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteCourse } from '../../../services/apiServices';

const ModalDeleteCourse = (props) => {
  const { show, setShow, dataDelete } = props
  // console.log("data delete: ", dataDelete)
  const handleClose = () => setShow(false);

  const handleSubmitDeleteCourse = async () => {
    let data = await deleteCourse(dataDelete)

    console.log('Data:', data)
    if (data && data.data.EC === 0) {
      toast.success(data.data.reply)
      handleClose()

      await props.fetchAllCourses()
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
          <Modal.Title>Xóa Khóa Học</Modal.Title>
        </Modal.Header>
        <Modal.Body>Xác nhận xóa khóa học này?
          <br></br>
          <b>Tiêu đề khóa học: {dataDelete}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDeleteCourse()}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteCourse;