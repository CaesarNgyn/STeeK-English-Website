import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { patchUpdateUser } from '../../../services/apiServices';
import { toast } from 'react-toastify';

const ModalViewUser = (props) => {
  const { show, setShow, dataView, fetchAllUsers } = props
  const [email, setEmail] = useState(dataView?.email)
  const [password, setPassword] = useState(dataView?.password)
  const [username, setUsername] = useState(dataView?.username)
  const [phone, setPhone] = useState(dataView?.phone ? dataView.phone : '')
  const [address, setAddress] = useState(dataView?.address ? dataView.address : '');
  const [roles, setRoles] = useState(dataView?.roles)
  // console.log("data update: ", dataUpdate)

  const handleClose = () => {
    setShow(false);
    // setEmail("")
    // setPassword("")
    // setUsername("")
    // setPhone("")
    // setAddress("")

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
          <Modal.Title>Thông Tin Cá Nhân</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-4">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email"
                className="form-control"
                disabled={true}
                value={email}
                onChange={(event) => setEmail(event.target.value)} />
            </div>
            {/* <div className="col-md-6">
              <label className="form-label">Mật khẩu</label>
              <input type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)} />
            </div> */}


            <div className="col-md-6">
              <label className="form-label">Tên tài khoản</label>
              <input type="text"
                className="form-control"
                value={username}
                disabled
                onChange={(event) => setUsername(event.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Địa chỉ</label>
              <input type="text"
                className="form-control"
                value={address}
                disabled
                onChange={(event) => setAddress(event.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Số điện thoại</label>
              <input type="text"
                className="form-control"
                value={phone}
                disabled
                onChange={(event) => setPhone(event.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Roles</label>
              <input type="text"
                className="form-control"
                value={roles}
                disabled
                onChange={(event) => setPhone(event.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Khóa học</label>
              <input type="text"
                className="form-control"
                disabled
                value={`Ultimate English`}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Đóng
          </Button>


        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalViewUser