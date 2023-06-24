import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import './ModalBuyCourse.scss'
const ModalBuyCourse = (props) => {
  const { show, setShow, dataBuy } = props

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
          <Modal.Title>{dataBuy.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div>Xác nhận mua khóa học
              <span> {dataBuy.title} </span> với giá
              <span> {dataBuy.price} </span>

            </div>
          </>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Đóng
          </Button>

          <Button variant="primary" >
            Mua
          </Button>


        </Modal.Footer>
      </Modal>
    </>

  )
}

export default ModalBuyCourse