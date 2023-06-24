import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import './ModalBuyCourse.scss'
import { useDispatch, useSelector } from 'react-redux';
import { postBuyCourse } from '../../../services/apiServices';
import { toast } from 'react-toastify';
import { addCourse } from '../../../redux/slices/userSlice';

const ModalBuyCourse = (props) => {
  const userAccount = useSelector(state => state.user.account)
  const { show, setShow, dataBuy } = props
  const dispatch = useDispatch();


  const handleClose = () => {
    setShow(false);

  }

  const handlePayment = async () => {
    const data = await postBuyCourse(userAccount.email, dataBuy._id)
    if (data && data.data?.EC === 0) {
      toast.success(data.data.message)
      dispatch(addCourse(dataBuy.title));
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