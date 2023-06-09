import './Course.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Course = (props) => {
  const { course, isBought, isStudyable } = props
  const navigate = useNavigate()
  // console.log("Course props: ", course)

  const handleClickStudyDetail = () => {
    // console.log("course got clicked: ", course.title)
    navigate(`/home/study/${course._id}`, { state: { course } })

  }


  return (

    <div className='course-container col-lg-4 col-sm-6'>

      <Card >
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <section className="card-decorate">
          <h3 className="card-title">{course.title}</h3>
        </section>
        {isStudyable ? <>
          <Card.Body>
            <div className="card-content">
              {/* <Card.Title>HTLM CSS pro</Card.Title> */}
              <Card.Text>
                {course.price}
              </Card.Text>
            </div>
            <Button
              variant="info"
              onClick={() => handleClickStudyDetail()}
            >
              Học
            </Button>



          </Card.Body>
        </> : <>
          <Card.Body>
            <div className="card-content">
              {/* <Card.Title>HTLM CSS pro</Card.Title> */}
              <Card.Text>
                {course.price}
              </Card.Text>
            </div>
            {isBought === false ? <>
              <Button
                variant="info"
                onClick={() => props.handleClickDetail(course)}
              >
                Xem chi tiết
              </Button>
              <Button
                variant="warning"
                onClick={() => props.handleClickBuy(course)}
              >
                Mua
              </Button>
            </> :
              <>
                <Button
                  variant="info"
                  onClick={() => props.handleClickDetail(course)}
                >
                  Xem chi tiết
                </Button>
                <Button
                  variant="warning"
                  onClick={() => props.handleClickBuy(course)}
                  disabled={true}
                >
                  Mua
                </Button>
              </>
            }

          </Card.Body>
        </>}





      </Card>





    </div>
  )
}

export default Course;
