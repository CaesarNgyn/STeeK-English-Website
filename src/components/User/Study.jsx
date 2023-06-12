import './Study.scss'
import ListGroup from 'react-bootstrap/ListGroup';

const Study = () => {
  return (
    //2. Route hiện bên trong khoá học khi ng dùng học
    <div className='study-content'>

      <div className="container row">
        {/*======================== LIST ITEM =====================*/}
        <div className="side-bar col-lg-3">
          <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1" className='list-title'>
              TOEIC 250
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" >
              Bai 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
              Bai 2
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
              Bai 3
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
              Bai 4
            </ListGroup.Item>

          </ListGroup>

        </div>
        {/* ===================== SHOW VIDEO ======================== */}
        <div className="side-content col-lg-9">
          <iframe width="105%" height="450px" src="https://www.youtube.com/embed/tPn3qf7ZA6c"
            title="YouTube video player"
            allowFullScreen></iframe>
          <h3 className='course-title'>Toeic 250</h3>
          <p>Tham gia các cộng đồng để cùng học hỏi, chia sẻ </p>
          <ul>
            <li>Fanpage: <a href="https://www.facebook.com/f8vnofficial" target="_blank" rel="noreferrer">https://www.facebook.com/f8vnofficial</a></li>
            <li>Group: <a href="https://www.facebook.com/groups/649972919142215" target="_blank" rel="noreferrer">https://www.facebook.com/groups/649972919142215</a></li>
            <li>Youtube: <a href="/external-url?continue=https%3A%2F%2Fwww.youtube.com%2FF8VNOfficial" target="_blank" rel="noreferrer">https://www.youtube.com/F8VNOfficial</a></li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Study;

