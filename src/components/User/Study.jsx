import { useSelector } from 'react-redux';
import Course from './Course/Course';
import './Study.scss'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllCourses } from '../../services/apiServices';

const Study = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const userAccount = useSelector(state => state.user.account)
  const [courses, setCourses] = useState([]);
  const [isBought, setIsBought] = useState(true)


  const fetchAllCourses = async () => {
    try {
      const data = await getAllCourses();
      setCourses(data.data);

      // Update the user information or perform any other actions
    } catch (error) {
      // toast.error('Failed to fetch all courses.');
      console.log("Failed to fetch all courses.")
    }
  };

  useEffect(() => {

    if (isAuthenticated) {
      fetchAllCourses();
    }
  }, [isAuthenticated]);
  return (
    //2. Route hiện bên trong khoá học khi ng dùng học
    <div className='study-content'>
      <div className="container">

        {/* ================ Header =================== */}
        <header>
          <h1 className='title'>Các khóa học đã mua</h1>
          <p>Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn phí, chất lượng, nội dung dễ hiểu.</p>
        </header>

        <h1 className='title'>Hãy bắt đầu học thôi </h1>
          {/* ==================== Direction ============= */}
        <div className="direction">
          <div className="section">
            <span className="icon"><i class="fad fa-search-location"></i></span>
            <p className="content-step line">1. Quan sát lộ trình </p>
            
          </div>
          <div className="section">
            <span className="icon"><i class="fad fa-pencil"></i></span>
            <p className="content-step line">2. Xác định thứ tự các khóa </p>
            
          </div>
          <div className="section">
            <span className="icon"><i class="far fa-bullseye-arrow"></i></span>
            <p className="content-step">3. Let's go</p>
            
          </div>
        </div>

          {/* ======================= Registered-Courses =================== */}
        <div className="registered-course row">
          {courses && courses.length > 0 && courses.map((course, index) => (
            // <div key={`course-${index}`} className='courses col-lg-4'>
            <Course course={course} isBought={isBought} />
            // {/* </div> */}
          ))}

        </div>

      </div>




    </div>
  )
}

export default Study;

