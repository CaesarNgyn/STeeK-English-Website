import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import './ModalBuyCourse.scss'
import { useSelector } from 'react-redux';
import { postBuyCourse } from '../../../services/apiServices';
import { toast } from 'react-toastify';

const ModalBuyCourse = (props) => {
  const userAccount = useSelector(state => state.user.account)
  const { show, setShow, dataBuy } = props

  const handleClose = () => {
    setShow(false);

  }

  const handlePayment = async () => {
    const data = await postBuyCourse(userAccount.email, dataBuy._id)
    if (data && data.data?.EC === 0) {
      toast.success(data.data.message)
      setShow(false);
    } else {
      toast.error(data.message)
      setShow(false);
    }
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

          <Button variant="primary" onClick={() => handlePayment()} >
            Mua
          </Button>


        </Modal.Footer>
      </Modal>
    </>

  )
}

export default ModalBuyCourse