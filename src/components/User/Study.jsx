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
      <h1 className='title'>Các khóa học đã mua</h1>
      {courses && courses.length > 0 && courses.map((course, index) => (
        <div key={`course-${index}`} className='courses'>
          <Course course={course} isBought={isBought} />
        </div>
      ))}



    </div>
  )
}

export default Study;

