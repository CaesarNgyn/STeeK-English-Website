import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { postChangePasswordUser } from '../../../services/apiServices';

const ModalChangePassword = (props) => {
  const { show, setShow, userChange } = props

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const handleClose = () => {
    setShow(false);

  }

  const handleSubmitChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Bạn cần phải nhập đủ thông tin!")
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu mới không khớp với mật khẩu xác nhận")
      return;
    }

    let data = await postChangePasswordUser(userChange, currentPassword, newPassword)
    if (data && data.data?.EC === 0) {
      toast.success(data.data.message)
      setShow(false)
    } else {
      toast.error(data.message)
      // console.log(data.message)
      setShow(false)
    }
  }

  return (
    <>
      <Modal show={show}
        size="xl"
        backdrop="static"
        className='modal-add-user'
        centered
      >
        <Modal.Header >
          <Modal.Title>Đổi mật khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-4">
            <div className="col-md-6">
              <label className="form-label">Mật khẩu hiện tại</label>
              <input type="password"
                className="form-control"

                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Mật khẩu mới</label>
              <input type="password"
                className="form-control"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Xác nhận lại mật khẩu mới</label>
              <input type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>



          </form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Đóng
          </Button>

          <Button variant="primary" onClick={handleSubmitChangePassword}>
            Đổi mật khẩu
          </Button>


        </Modal.Footer>
      </Modal>
    </>

  )
}

export default ModalChangePassword