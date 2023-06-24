import './Student.scss'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../services/apiServices';
import ModalDeleteUser from './ModalUser/ModalDeleteUser'
import ModalUpdateUser from './ModalUser/ModalUpdateUser';
import ModalViewUser from './ModalUser/ModalViewUser';


const Student = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const userAccount = useSelector(state => state.user.account)
  const [listUsers, setListUsers] = useState()
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
  const [showModalViewUser, setShowModalViewUser] = useState(false)
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
  const [dataUpdate, setDataUpdate] = useState({})
  const [dataDelete, setDataDelete] = useState()
  const [dataView, setDataView] = useState({})


  const fetchAllUsers = async () => {
    try {
      const data = await getAllUsers();
      console.log(data.data)
      setListUsers(data.data.users);


      // Update the user information or perform any other actions
    } catch (error) {

      console.log("Failed to fetch all users.");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllUsers();
    }
  }, [isAuthenticated]);

  const handleClickBtnDelete = (user) => {

    setShowModalDeleteUser(true)
    setDataDelete(user)

  }

  const handeClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true)
    setDataUpdate(user)
  }

  const handleClickBtnView = (user) => {
    console.log("User data: ", user)
    setShowModalViewUser(true)
    setDataView(user)
  }

  const formatDate = (createdAt) => {
    // const createdAt = "2023-06-12T12:00:59.304Z";
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
  }




  return (
    <div className='admin-student'>
      <h3>Học Viên</h3>
      <>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Email</th>
              <th scope="col">Ngày tạo</th>
              <th scope="col">Ngày sửa đổi</th>

              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!listUsers ? (
              <tr>
                <td colSpan="5">Loading data...</td>
              </tr>
            ) : (
              listUsers.map((user, index) => (
                <tr key={`table-user-${index}`}>
                  <td>{index + 1}</td>
                  <td>{user.email}</td>
                  <td>{formatDate(user.createdAt)}</td>
                  <td>{formatDate(user.updatedAt)}</td>
                  <td>{user.roles}</td>
                  <td>
                    {user.roles !== "Admin" && (
                      <>
                        <button
                          className="btn btn-secondary"
                          onClick={() => handleClickBtnView(user)}
                        >
                          Xem
                        </button>
                        <button
                          className="btn btn-warning mx-3"
                          onClick={() => handeClickBtnUpdate(user)}
                        >
                          Sửa
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleClickBtnDelete(user.email)}
                        >
                          Xóa
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}



            {listUsers && listUsers.length === 0 &&

              <tr>
                <td colSpan={'4'}>No data</td>
              </tr>

            }
          </tbody>
        </table>
      </>

      {showModalDeleteUser && (
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
          fetchAllUsers={fetchAllUsers}
        />
      )}

      {showModalUpdateUser && (
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchAllUsers={fetchAllUsers}
        />
      )}

      {showModalViewUser && (
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataView={dataView}
          fetchAllUsers={fetchAllUsers}
        />
      )}

    </div>
  )
}

export default Student;
