import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { patchUpdateUser } from '../../../services/apiServices';
import { toast } from 'react-toastify';

const ModalUpdateUser = (props) => {
  const { show, setShow, dataUpdate, fetchAllUsers } = props
  const [email, setEmail] = useState(dataUpdate?.email)
  const [password, setPassword] = useState(dataUpdate?.password)
  const [username, setUsername] = useState(dataUpdate?.username)
  const [phone, setPhone] = useState(dataUpdate.phone ? dataUpdate.phone : '')
  const [address, setAddress] = useState(dataUpdate.address ? dataUpdate.address : '');
  const [roles, setRoles] = useState(dataUpdate?.roles)
  // console.log("data update: ", dataUpdate)

  const handleClose = () => {
    setShow(false);
    // setEmail("")
    // setPassword("")
    // setUsername("")
    // setPhone("")
    // setAddress("")

  }

  const handleClickUpdate = async () => {
    let data = await patchUpdateUser(username, password, email, address, phone, roles)
    if (data && data.data?.EC === 0) {
      toast.success(data.data.message)
      setShow(false)
      props.fetchAllUsers()
    } else {
      // toast.error(data.message)
      console.log(data.message)
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
                onChange={(event) => setUsername(event.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Địa chỉ</label>
              <input type="text"
                className="form-control"
                value={address}
                onChange={(event) => setAddress(event.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Số điện thoại</label>
              <input type="text"
                className="form-control"
                value={phone}
                onChange={(event) => setPhone(event.target.value)} />
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Đóng
          </Button>
          <Button
            variant="primary"
            onClick={() => handleClickUpdate()}
          >
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalUpdateUser