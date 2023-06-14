import './StudyDetail.scss'
import ListGroup from 'react-bootstrap/ListGroup';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StudyDetail = () => {
  const location = useLocation();
  const { course } = location.state;
  const navigate = useNavigate();
  const [videoURL, setVideoURL] = useState(course.listVideo[0])
  const [currentVideo, setCurrentVideo] = useState(course.listVideo[0])
  console.log("study detail's course infor: ", course)


  const handleOnClickLesson = (video) => {
    console.log("lesson url clicked: ", video)
    setVideoURL(video)
    setCurrentVideo(video)
  }

  return (
    //2. Route hiện bên trong khoá học khi ng dùng học
    <div className='study-content'>
      <div className="container row">
        {/*======================== LIST ITEM =====================*/}
        <div className="side-bar col-lg-3">
          <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item
              action href="#link1"
              className='list-title'
              disabled
            >
              {course.title}
            </ListGroup.Item>


            {course && course.listVideo?.length > 0 &&
              course.listVideo.map((video, index) => (
                <ListGroup.Item
                  key={`video-${index}`}
                  action
                  onClick={() => handleOnClickLesson(video)}
                  href={currentVideo === video ? '#link1' : ''}
                  disabled={currentVideo === video ? true : false}
                >
                  Lesson {index + 1}
                </ListGroup.Item>
              ))}


          </ListGroup>

        </div>
        {/* ===================== SHOW VIDEO ======================== */}
        <div className="side-content col-lg-9">
          <iframe
            width="105%"
            height="450px"
            src={`https://www.youtube.com/embed/${videoURL}`}
            title="YouTube video player"
            allowFullScreen></iframe>
          <h3 className='course-title'>{course.title}</h3>
          <p>{course.description} </p>
          <ul>
            <li>Fanpage:
              <a href="https://www.facebook.com/f8vnofficial"
                target="_blank"
                rel="noreferrer">
                https://www.facebook.com/f8vnofficial
              </a>
            </li>
            <li>Group:
              <a href="https://www.facebook.com/groups/649972919142215"
                target="_blank" rel="noreferrer">
                https://www.facebook.com/groups/649972919142215</a>
            </li>
            <li>Youtube:
              <a href="/external-url?continue=https%3A%2F%2Fwww.youtube.com%2FF8VNOfficial"
                target="_blank"
                rel="noreferrer">
                https://www.youtube.com/F8VNOfficial
              </a>
            </li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default StudyDetail;

