import { useSelector } from 'react-redux'
import { getAllCourses } from '../../services/apiServices'
import './Course.scss'
import { useEffect, useState } from 'react'


const Course = () => {

  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const userAccount = useSelector(state => state.user.account)
  const [listCourses, setListCourses] = useState()
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
  const [showModalViewUser, setShowModalViewUser] = useState(false)
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
  const [dataUpdate, setDataUpdate] = useState({})
  const [dataDelete, setDataDelete] = useState()
  const [dataView, setDataView] = useState({})

  const fetchAllCourses = async () => {
    try {
      const data = await getAllCourses();
      console.log(data.data)
      setListCourses(data.data);
      // Update the user information or perform any other actions
    } catch (error) {

      console.log("Failed to fetch all courses.");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllCourses();
    }
  }, [isAuthenticated]);

  return (
    <div className='admin-course'>
      <h3>Khóa Học</h3>

      <>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Title</th>
              <th scope="col">Giá</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!listCourses ? (
              <tr>
                <td colSpan="5">Loading data...</td>
              </tr>
            ) : (
              listCourses.map((course, index) => (
                <tr key={`table-user-${index}`}>
                  <td>{index + 1}</td>
                  <td>{course.title}</td>
                  <td>{course.price}</td>
                  <td>{course.createdAt}</td>
                  <td>

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

                  </td>
                </tr>
              ))
            )}



            {listCourses && listCourses.length === 0 &&

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

export default Course;
