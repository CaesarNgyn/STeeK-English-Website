import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

const UserInfo = (props) => {
  const { show, setShow, dataUpdate } = props

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [image, setImage] = useState("")
  console.log("data update: ", dataUpdate)

  const handleClose = () => {
    setShow(false);
    setEmail("")
    setPassword("")
    setUsername("")
    setPhone("")
    setAddress("")
    setPreviewImage("")


  }

  return (
    <>
      <Modal show={show}
        size="xl"
        backdrop="static"
        className='modal-add-user'
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

                onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mật khẩu</label>
              <input type="password"
                className="form-control"

                onChange={(event) => setPassword(event.target.value)} />
            </div>


            <div className="col-md-6">
              <label className="form-label">Tên tài khoản</label>
              <input type="text"
                className="form-control"

                onChange={(event) => setUsername(event.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Địa chỉ</label>
              <input type="text"
                className="form-control"

                onChange={(event) => setPassword(event.target.value)} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Số điện thoại</label>
              <input type="text"
                className="form-control"
                onChange={(event) => setPassword(event.target.value)} />
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Đóng
          </Button>
          <Button variant="primary" >
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default UserInfo