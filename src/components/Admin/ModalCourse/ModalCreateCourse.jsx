import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './ModalCourse.scss'
import { patchUpdateCourse, postCreateCourse } from '../../../services/apiServices';

const ModalCreateCourse = (props) => {
  const { show, setShow, fetchAllCourses } = props
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [listVideo, setListVideo] = useState([])

  // console.log("data update: ", dataUpdate)

  const handleClose = () => {
    setShow(false);

  }

  const handleClickCreate = async () => {
    if (!title || !description || !price || !listVideo) {
      // console.log("titel: ", title,
      //   "des:", description, "price: ", price, "lsitvid: ", listVideo)
      toast.error("Hãy điền đầy đủ thông tin khóa học.")
      return
    }
    let data = await postCreateCourse(title, description, price, listVideo)
    if (data && data.data?.EC === 0) {
      toast.success(data.data.message)
      setShow(false)
      props.fetchAllCourses()
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
          <Modal.Title>Thông Tin Khóa học</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-4">
            <div className="col-md-6">
              <label className="form-label">Tên khóa học</label>
              <textarea
                className="form-control"
                value={title}
                onChange={(event) => setTitle(event.target.value)} />

            </div>
            <div className="col-md-6">
              <label className="form-label">Giá</label>
              <textarea
                className="form-control"
                value={price}

                onChange={(event) => setPrice(event.target.value)}
              />

            </div>
            <div className="col-md-12">
              <label className="form-label">Mô tả</label>
              <textarea
                className="form-control "
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">List Video</label>
              <textarea
                className="form-control textarea-like-input"
                value={listVideo}
                onChange={(event) => setListVideo(event.target.value)}
              />
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Đóng
          </Button>
          <Button
            variant="primary"
            onClick={() => handleClickCreate()}
          >
            Tạo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalCreateCourse