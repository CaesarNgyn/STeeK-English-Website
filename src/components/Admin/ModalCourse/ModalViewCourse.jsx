import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
const ModalViewCourse = (props) => {
  const { show, setShow, dataView } = props

  const handleClose = () => {
    setShow(false);

  }

  return (
    <>
      <Modal show={show}
        size="x"
        backdrop="static"
        className='modal-add-user'
        centered
      >
        <Modal.Header >
          <Modal.Title>{dataView.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Tên khóa học: {dataView.title}</div>
          <br></br>
          <div>Mô tả: {dataView.description} </div>
          <br></br>
          <div>Số lượng video: {dataView.listVideo.length} </div>
          <br></br>
          <div>Giá khóa học: {dataView.price} </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Đóng
          </Button>


        </Modal.Footer>
      </Modal>
    </>

  )
}

export default ModalViewCourse