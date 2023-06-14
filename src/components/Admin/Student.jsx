import './Student.scss'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../services/apiServices';


const Student = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const userAccount = useSelector(state => state.user.account)
  const [listUsers, setListUsers] = useState()

  const fetchAllUsers = async () => {
    try {
      const data = await getAllUsers();
      setListUsers(data.data)
      console.log(listUsers.data)
      // Update the user information or perform any other actions
    } catch (error) {
      // toast.error('Failed to fetch all courses.');
      console.log("Failed to fetch all users.")
    }
  };

  useEffect(() => {

    if (isAuthenticated) {
      fetchAllUsers();
    }
  }, [isAuthenticated]);


  return (
    <div class='admin-student'>
      <h3>Học Viên</h3>
      <>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Email</th>
              <th scope="col">Đã mua</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {listUsers && listUsers.length > 0 && listUsers.map((user, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{index}</td>
                  <td>{user.email}</td>
                  <td>Ultimate English</td>
                  <td>{user.roles}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => props.handleClickBtnView(item)}
                    >Xem</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => props.handeClickBtnUpdate(item)}>
                      Sửa
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.handleClickBtnDelete(item)}
                    >Xóa</button>
                  </td>
                </tr>
              )
            })}
            {listUsers && listUsers.length === 0 &&

              <tr>
                <td colSpan={'4'}>No data</td>
              </tr>

            }
          </tbody>
        </table>
      </>
    </div>
  )
}

export default Student;
